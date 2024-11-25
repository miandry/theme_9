
jQuery(document).ready(function() {

  if( document.body.contains(  document.querySelector(".nav-bar-and-resp") ) ) {
    document.querySelector(".icon-menu-mobile").onclick = () => {
        document.querySelector(".menu-mobile-effet").classList.toggle("show");
    }
  }

  if( document.body.contains(  document.querySelector(".swiper-slider--and") ) ) {
    var swiper = new Swiper(".swiper-slider--and", {
      cssMode: false,
      slidesPerView: 3,
      spaceBetween: 50,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: ".ctrl--right",
        prevEl: ".ctrl--left",
      },
      breakpoints: {  
        992: {
          spaceBetween: 30,
        },
        768: {
          spaceBetween: 15, 
        },
        500: {
          spaceBetween: 30,
        },
        280: {
          spaceBetween: 10,
        }
      },
    });
    document.querySelector('.swiper-slider--and').classList.add('swiper-no-swiping');
  }
  
  if( document.body.contains(  document.querySelector(".swiper-desk") ) ) {  
    var swiper = new Swiper(".swiper-desk", {
      slidesPerView: 2,
      pagination: {
        el: ".dots-desk",
        clickable: true
      },
      grid: {
          rows: 1,
      },
      navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
      },
    });
  }

  if( document.body.contains(  document.querySelector(".swiper-tab") ) ) {
    var swiper = new Swiper(".swiper-tab", {
      slidesPerView: 1,
      pagination: {
          el: ".dots-tab",
          clickable: true
      },
      grid: {
        rows: 2
      },
      spaceBetween: 50,
      navigation: {
          nextEl: ".fa-angle-right",
          prevEl: ".fa-angle-left",
      },
    });
  }

  if( document.body.contains(  document.querySelector(".swiper-mob") ) ) {
    var swiper = new Swiper(".swiper-mob", {
      slidesPerView: 1,
      pagination: {
        el: ".dots-mob",
        clickable: true
      },
      grid: {
          rows: 1
      },
      spaceBetween: 51,
      navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
      }
      
    });
  }

  if( document.body.contains(  document.querySelector(".swiper-feature") ) ) {
    var swiper = new Swiper(".swiper-feature", {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
    });
  }

})