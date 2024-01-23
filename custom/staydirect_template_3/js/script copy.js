var swiper = new Swiper(".swiper-desk", {
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
    navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
    },
});
