document.addEventListener("DOMContentLoaded", function(){
var year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

  window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        document.getElementById('navbar_smooth').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_smooth').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });

function SliderSet(name,xxlg,xlg,lg,md,sm,xsm){
  //6,6,6,4,2,2
    const swiper = new Swiper('.'+name+'-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 400,
        spaceBetween:20,
        slidesPerView: xxlg,
        preventClicksPropagation: false,
        preventClicks: false,
        allowTouchMove: false,
        autoplay: {
          delay: 6000,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
         breakpoints: {
         320: {
            slidesPerView: xsm,
            spaceBetweenSlides: 2
        },
        // when window width is <= 499px
        499: {
            slidesPerView: sm,
            spaceBetweenSlides: 2
        },
        // when window width is <= 999px
        999: {
            slidesPerView: md,
            spaceBetweenSlides:20
        },
        1366: {
          slidesPerView: lg,
          spaceBetweenSlides:20
      },
        1440: {
          slidesPerView: xlg,
          spaceBetweenSlides:20
      },
         1920: {
          slidesPerView: xxlg,
            spaceBetweenSlides: 20
        }
    }
      });
}
function loader(){
  document.getElementById('loader').style.display = 'none';
}


setTimeout(() => {
  loader();
  SliderSet('categories',6,6,6,5,3,2);
  SliderSet('brand',5,5,5,5,3,2);
  

  },200);


}); 