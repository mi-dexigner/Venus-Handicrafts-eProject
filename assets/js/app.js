var year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

function sliderSet(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        spaceBetween:20,
        slidesPerView: 3,
        preventClicksPropagation: false,
        preventClicks: false,
        allowTouchMove: false,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
       /*  scrollbar: {
          el: '.swiper-scrollbar',
        }, */

         breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetweenSlides: 2
        },
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 2
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides:20
        },
        1366: {
          slidesPerView: 3,
          spaceBetweenSlides:20
      },
        1440: {
          slidesPerView: 3,
          spaceBetweenSlides:20
      },
         1920: {
            slidesPerView: 3,
            spaceBetweenSlides: 20
        }
    }
      });
}



setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
  

  },2000);