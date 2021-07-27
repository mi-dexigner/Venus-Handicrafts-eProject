var year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

function CategoriesSliderSet(){
    const swiper = new Swiper('.categories-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        spaceBetween:20,
        slidesPerView: 6,
        preventClicksPropagation: false,
        preventClicks: false,
        allowTouchMove: false,
        autoplay: {
          delay: 2000,
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
          slidesPerView: 4,
          spaceBetweenSlides:20
      },
        1440: {
          slidesPerView: 6,
          spaceBetweenSlides:20
      },
         1920: {
          slidesPerView: 6,
            spaceBetweenSlides: 20
        }
    }
      });
}
function loader(){
  document.getElementById('loader').style.display = 'none';
}


setTimeout(() => {
  // loader();
  CategoriesSliderSet();
  

  },3000);