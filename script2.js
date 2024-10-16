
// SWIPER CAROUSEL
new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
   //PAGINATION BUTTON
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
//Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        },
    }
   
  });