//AOS.init({disable: 'mobile'});
jQuery(function ($) {
  AOS.init({
    fset: 200,
    delay: 100,
    duration: 600,
    disable: "mobile",
  });

  // Toggle Side Menu
  function toggleSideMenu() {
    $(".nav_sec").toggleClass("slidein");
    if (!$(".nav_sec .cls-btn").length) {
      $(".nav_sec").prepend('<div class="cls-btn"></div>');
    }
    $(".cls-btn").on("click", function () {
      $(".nav_sec").removeClass("slidein");
    });
  }
  $(".toggle-menu").on("click", toggleSideMenu);

  // Toggle Submenu
  $(".nav_sec ul > li > ul").parent().prepend('<i class="arw-nav"></i>');
  $(".arw-nav").on("click", function () {
    const $submenu = $(this).siblings("ul");
    $submenu.slideToggle();
    $(this)
      .toggleClass("actv")
      .parent()
      .siblings()
      .find(".arw-nav")
      .removeClass("actv");
    $(this).parent().siblings().find("ul").slideUp();
  });

  // Sticky Header on Scroll
  $(window).on("scroll", function () {
    const scroll = $(this).scrollTop();
    if (scroll >= 50) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  // back to top start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  // back to top end

  /////////// slick js start /////////

  // $('.agents_slider').slick({
  //   dots: false,
  //   infinite: true,
  //   autoplay: false,
  //   pauseOnHover: false,
  //   speed: 500,
  //   arrows: true,
  //   slidesToShow: 3,
  //   prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
  //   nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
  //   slidesToScroll: 1,
  //   responsive: [
  //     { breakpoint: 991, settings: { slidesToShow: 2 } },
  //     { breakpoint: 700, settings: { slidesToShow: 1 } },

  //   ],
  // });

  $(".goal_slider").slick({
    dots: true,
    infinite: true,
    autoplay: false,
    pauseOnHover: false,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 991, settings: { slidesToShow: 1 } }],
  });

  $(".service_slider").slick({
    dots: true,
    infinite: true,
    autoplay: false,
    pauseOnHover: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 3 } },
      { breakpoint: 950, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  });

  var maxHeightc = 0;
  $(".service_bx_text").each(function () {
    var currentHeightc = $(this).outerHeight();
    // console.log("currentHeight :", currentHeightc);
    if (currentHeightc > maxHeightc) {
      maxHeightc = currentHeightc;
    }
  });
  $(".service_bx_text").css("height", maxHeightc + "px");

  var maxHeighte = 0;
  $(".inner_service_sec .service_bx_text").each(function () {
    var currentHeighte = $(this).outerHeight();
    //console.log("currentHeight :", currentHeighte);
    if (currentHeighte > maxHeighte) {
      maxHeighte = currentHeighte;
    }
  });
  $(".inner_service_sec .service_bx_text").css("height", maxHeightc + "px");

  var maxHeightd = 0;
  $(".seller_bx").each(function () {
    var currentHeightd = $(this).outerHeight();
    //  console.log("currentHeight :", currentHeightd);
    if (currentHeightd > maxHeightd) {
      maxHeightd = currentHeightd;
    }
  });
  $(".seller_bx").css("height", maxHeightd + "px");
  /////////// slick js end /////////

  ///////// play and pause js start  //////////

  // const video = $("#myVideo").get(0);
  // const container = $(".video-container");
  // const button = $("#playPauseBtn");
  // let hideTimeout = null;

  // video.removeAttribute("controls");

  // $("#myVideo").on("click", function () {
  //   if (!video.hasAttribute("controls")) {
  //     video.setAttribute("controls", true);
  //     video.play();
  //     container.removeClass("paused");
  //   }
  // });

  // button.on("click", function (e) {
  //   e.stopPropagation();
  //   if (video.paused) {
  //     video.play();
  //     container.removeClass("paused");
  //   } else {
  //     video.pause();
  //     container.addClass("paused");
  //   }
  // });

  // $("#myVideo").on("pause", function () {
  //   button.text("▶").css({ opacity: "1", display: "flex" });
  //   container.addClass("paused");
  //   clearTimeout(hideTimeout);
  // });

  // $("#myVideo").on("play", function () {
  //   button.text("❚❚").css({ opacity: "1", display: "flex" });
  //   container.removeClass("paused");

  //   clearTimeout(hideTimeout);
  //   hideTimeout = setTimeout(() => {
  //     button.fadeOut(300);
  //   }, 1000);
  // });

  ///////// play and pause js end  //////////
});

// document.addEventListener("DOMContentLoaded", (e) => {
//   const boxes = document.querySelectorAll(".leader_bx");
//   const modal = document.getElementById("myModall");
//   const modalTitle = document.getElementById("modalTitle");
//   const modalDesig = document.getElementById("modalDesig");
//   const modalBody = document.getElementById("modalBody");
//   const closeModal = document.getElementById("closeModal");
//   const modalImg = document.getElementById("modalImg");

//   boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//       const title = box.querySelector("h4").innerText;
//       const designation = box.querySelector("em").innerText;
//       const img = box.querySelector("img");
//       const imgSrc = img?.getAttribute("src") || "";

//       const allParagraphs = Array.from(box.getElementsByTagName("p"));

//       let contentHTML = "";
//       allParagraphs.forEach((p) => {
//         contentHTML += `<p>${p.innerHTML}</p>`;
//       });

//       modalImg.src = imgSrc;
//       modalTitle.textContent = title;
//       modalDesig.textContent = designation;
//       modalBody.innerHTML = contentHTML;
//       modal.classList.add("showModal");
//     });
//   });

//   closeModal.addEventListener("click", () => {
//     modal.classList.remove("showModal");
//   });

//   window.addEventListener("click", (e) => {
//     if (e.target == modal) {
//       modal.classList.remove("showModal");
//     }
//   });
// });

jQuery(function () {
  jQuery(".btnn-blue")
    .on("mouseenter", function (e) {
      var parentOffset = jQuery(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      jQuery(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = jQuery(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      jQuery(this).find("span").css({ top: relY, left: relX });
    });

  jQuery(".btnn-white")
    .on("mouseenter", function (e) {
      var parentOffset = jQuery(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      jQuery(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = jQuery(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      jQuery(this).find("span").css({ top: relY, left: relX });
    });

  jQuery(".con-btn")
    .on("mouseenter", function (e) {
      var parentOffset = jQuery(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      jQuery(this).find("em").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = jQuery(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      jQuery(this).find("em").css({ top: relY, left: relX });
    });
});

//     gsap.registerPlugin(ScrollTrigger);
// 	if (window.innerWidth > 767) {
// 		gsap.to('.hm-banner-txt', {
//         scrollTrigger: {
//           trigger: '.hm-banner-txt',
//           start: "top 100%",
//           toggleActions: "play none none none"
//         },

// 		y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out"
//       });
// 	gsap.to('.hm-title', {
//         scrollTrigger: {
//           trigger: '.hm-title',
//           start: "top 50%",
//           toggleActions: "play none none none"
//         },

// 		y: 0,
//         opacity: 1,
//         duration: 1.5,
//         ease: "power2.out"
//       });
// 	gsap.to('.hm-feature-video', {
//         scrollTrigger: {
//           trigger: '.hm-feature-video',
//           start: "top 50%",
//           toggleActions: "play none none none"
//         },

// 		x: 0,
//         opacity: 1,
//         duration: 1.5,
//         ease: "power2.out"
//       });

// 	// Animate left content from left
//     gsap.utils.toArray('.hm-left').forEach(el => {
//       gsap.to(el, {
//         scrollTrigger: {
//           trigger: el,
//           start: "top 50%",
//           toggleActions: "play none none none"
//         },
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out"
//       });
//     });

// 	gsap.utils.toArray('.hm-right').forEach(el => {
//       gsap.to(el, {
//         scrollTrigger: {
//           trigger: el,
//           start: "top 50%",
//           toggleActions: "play none none none"
//         },
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out"
//       });
//     });
// 	}

document.addEventListener("DOMContentLoaded", (e) => {
  // 	 gsap.registerPlugin(ScrollTrigger);
  // 	if (window.innerWidth > 767) {
  // 		gsap.to('.hm-banner-txt', {
  //         scrollTrigger: {
  //           trigger: '.hm-banner-txt',
  //           start: "top 100%",
  //           toggleActions: "play none none none"
  //         },
  // 		y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power2.out"
  //       });
  // 	gsap.to('.hm-title', {
  //         scrollTrigger: {
  //           trigger: '.hm-title',
  //           start: "top 50%",
  //           toggleActions: "play none none none"
  //         },
  // 		y: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //         ease: "power2.out"
  //       });
  // 	gsap.to('.hm-feature-video', {
  //         scrollTrigger: {
  //           trigger: '.hm-feature-video',
  //           start: "top 50%",
  //           toggleActions: "play none none none"
  //         },
  // 		x: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //         ease: "power2.out"
  //       });
  // 	// Animate left content from left
  //     gsap.utils.toArray('.hm-left').forEach(el => {
  //       gsap.to(el, {
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 50%",
  //           toggleActions: "play none none none"
  //         },
  //         x: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power2.out"
  //       });
  //     });
  // 	gsap.utils.toArray('.hm-right').forEach(el => {
  //       gsap.to(el, {
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 50%",
  //           toggleActions: "play none none none"
  //         },
  //         x: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power2.out"
  //       });
  //     });
  // 	}
});
