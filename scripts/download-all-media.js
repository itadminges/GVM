import fs from 'fs';
import path from 'path';
import https from 'https';

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      return resolve({ status: 'exists', size: fs.statSync(dest).size });
    }

    ensureDirectoryExistence(dest);
    const file = fs.createWriteStream(dest);

    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }, timeout: 30000 }, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return resolve({ status: 'error', code: response.statusCode });
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          resolve({ status: 'downloaded', size: fs.statSync(dest).size });
        });
      });
    });

    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve({ status: 'error', error: err.message });
    });

    request.on('timeout', () => {
      request.destroy();
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve({ status: 'error', error: 'timeout' });
    });
  });
}

async function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function scanDir(dir, filter) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (let file of list) {
    let filePath = path.join(dir, file);
    let stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(scanDir(filePath, filter));
    } else if (!filter || filter(filePath)) {
      results.push(filePath);
    }
  }
  return results;
}

async function main() {
  console.log('=== Starting Complete Media Sync for GVm ===\n');

  const allUrlsToDownload = new Map(); // targetRelPath -> array of candidate URLs

  function addUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return;
    // Clean up url: remove trailing parenthesis, quotes, semicolons, query strings
    let clean = rawUrl.trim().replace(/^['"]+|['"\);,]+$/g, '');
    clean = clean.split(/[?#]/)[0];
    if (!clean.includes('/wp-content/uploads/')) return;

    const relPath = clean.replace(/^.*\/wp-content\/uploads\//, '');
    if (!relPath || relPath.includes('..')) return;

    if (!allUrlsToDownload.has(relPath)) {
      allUrlsToDownload.set(relPath, []);
    }
    const candidates = allUrlsToDownload.get(relPath);
    const standardUrl = `https://gvm.om/wp-content/uploads/${relPath}`;
    const bluehostUrl = `https://ize.hoh.mybluehost.me/website_c7b34cad/wp-content/uploads/${relPath}`;

    if (!candidates.includes(clean)) candidates.push(clean);
    if (!candidates.includes(standardUrl)) candidates.push(standardUrl);
    if (!candidates.includes(bluehostUrl)) candidates.push(bluehostUrl);
  }

  // 1. Fetch from WordPress REST API (all media)
  console.log('Step 1: Querying WordPress REST API for all media items...');
  let page = 1;
  let hasMore = true;
  let totalApiItems = 0;

  while (hasMore) {
    try {
      const url = `https://gvm.om/wp-json/wp/v2/media?per_page=100&page=${page}`;
      console.log(`Fetching ${url}...`);
      const items = await fetchJSON(url);
      if (!Array.isArray(items) || items.length === 0) {
        hasMore = false;
        break;
      }
      totalApiItems += items.length;
      console.log(`Received ${items.length} media items on page ${page}.`);

      for (const item of items) {
        if (item.source_url) addUrl(item.source_url);
        if (item.guid && item.guid.rendered) addUrl(item.guid.rendered);
        if (item.media_details && item.media_details.sizes) {
          for (const sizeKey of Object.keys(item.media_details.sizes)) {
            const sizeObj = item.media_details.sizes[sizeKey];
            if (sizeObj.source_url) addUrl(sizeObj.source_url);
          }
        }
      }
      page++;
    } catch (e) {
      console.log(`Finished API pagination or error: ${e.message}`);
      hasMore = false;
    }
  }
  console.log(`Total media entries processed from WP API: ${totalApiItems}`);

  // 2. Scan raw_html files
  console.log('\nStep 2: Scanning all raw_html files for image references...');
  const rawFiles = scanDir('raw_html');
  for (const file of rawFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.matchAll(/(https?:\/\/[^\s"'<>\\]+wp-content\/uploads\/[^\s"'<>\\]+)/g);
    for (const m of matches) {
      addUrl(m[1]);
    }
  }

  // 3. Scan src files
  console.log('\nStep 3: Scanning src/ files for image references...');
  const srcFiles = scanDir('src');
  for (const file of srcFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.matchAll(/\/assets\/uploads\/([a-zA-Z0-9_\-\.\/]+)/g);
    for (const m of matches) {
      addUrl(`https://gvm.om/wp-content/uploads/${m[1]}`);
    }
    const wpMatches = content.matchAll(/(https?:\/\/[^\s"'<>\\]+wp-content\/uploads\/[^\s"'<>\\]+)/g);
    for (const m of wpMatches) {
      addUrl(m[1]);
    }
  }

  console.log(`\nTotal unique files to verify in public/assets/uploads/: ${allUrlsToDownload.size}`);

  // 4. Download missing files
  let downloadedCount = 0;
  let existsCount = 0;
  let failedCount = 0;
  const failedList = [];

  const baseDir = path.resolve('public/assets/uploads');

  let index = 0;
  for (const [relPath, candidateUrls] of allUrlsToDownload.entries()) {
    index++;
    const destPath = path.join(baseDir, relPath);

    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
      existsCount++;
      continue;
    }

    // Try downloading from candidate URLs
    let success = false;
    let lastErr = null;
    for (const url of candidateUrls) {
      try {
        const res = await downloadFile(url, destPath);
        if (res.status === 'downloaded' && res.size > 0) {
          console.log(`[${index}/${allUrlsToDownload.size}] Downloaded: ${relPath} (${(res.size / 1024).toFixed(1)} KB)`);
          downloadedCount++;
          success = true;
          break;
        } else {
          lastErr = res;
        }
      } catch (e) {
        lastErr = e.message;
      }
    }

    if (!success) {
      console.warn(`[${index}/${allUrlsToDownload.size}] FAILED: ${relPath} - ${JSON.stringify(lastErr)}`);
      failedCount++;
      failedList.push(relPath);
    }
  }

  console.log('\n=== Download Summary ===');
  console.log(`Already existed: ${existsCount}`);
  console.log(`Newly downloaded: ${downloadedCount}`);
  console.log(`Failed: ${failedCount}`);
  if (failedList.length > 0) {
    console.log('Failed items:', failedList);
  }
}

main().catch(console.error);
