
jQuery(document).ready(function() {
  // Your code to run when the DOM is ready
  console.log('DOM is ready!');

  
if( document.body.contains(  document.querySelector(".nav-bar-and-resp") ) ) {
  document.querySelector(".icon-menu-mobile").onclick = () => {
      document.querySelector(".menu-mobile-effet").classList.toggle("show");
  }
}

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

document.querySelector('.swiper-slider--and').classList.add('swiper-no-swiping')
  
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

var swiper = new Swiper(".swiper-feature", {
  slidesPerView: 3,
  grid: {
    rows: 1
  },

});

if( document.body.contains(  document.querySelector(".settings") ) ) {
  let settings_color = document.querySelectorAll(".setting-color");

  settings_color.forEach( (setting_color,index) => {
      setting_color.addEventListener( "click", () => {
          let color = setting_color.getAttribute("class");
          let vert = color.includes("vert");
          let bleu = color.includes("bleu");
          let gris = color.includes("gris");
          //document.querySelector(".setting-color.active").classList.remove("active");
          document.querySelector(".setting-color.active").classList.remove("active");
       
          if(bleu){
            document.documentElement.style.setProperty("--bleu-color","#3498DB");
            document.documentElement.style.setProperty("--bleumarine-color","#124668");
            document.documentElement.style.setProperty("--lineargradient-color","rgba(18, 70, 104, 0.70)");
            //document.querySelector(".setting-color.bleu").classList.add("active");
          
            settings_color[index].classList.add("active");
            console.log(index);
          }
          if(vert){
            document.documentElement.style.setProperty("--bleu-color","#1ECC71");
            document.documentElement.style.setProperty("--bleumarine-color","#137C46");
            document.documentElement.style.setProperty("--lineargradient-color","rgba(19, 124, 70, 0.70)");
            //document.querySelector(".setting-color.vert").classList.add("active");

            settings_color[index].classList.add("active");
            console.log(index);
          }
          if(gris){
            document.documentElement.style.setProperty("--bleu-color","#333");
            document.documentElement.style.setProperty("--bleumarine-color","#333");
            document.documentElement.style.setProperty("--lineargradient-color","rgba(51, 51, 51, 0.70)");
            //document.querySelector(".setting-color.gris").classList.add("active");
            settings_color[index].classList.add("active");
            console.log(index);
          }
      })
  })

}
});