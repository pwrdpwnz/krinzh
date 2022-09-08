// let slides = document.querySelectorAll('#slides .slider__slide');
// let next = document.getElementById('next');
// let previous = document.getElementById('prev');
// let currentSlide = 0;
//
// function nextSlide() {
//   goToSlide(currentSlide+1);
// }
//
// function previousSlide() {
//   goToSlide(currentSlide-1);
// }
//
// function goToSlide(n) {
//   slides[currentSlide].className = 'slider__slide';
//   currentSlide = (n+slides.length)%slides.length;
//   slides[currentSlide].className = 'slider__slide showing';
// }
//
// next.onclick = function() {
//   nextSlide();
// };
// previous.onclick = function() {
//   previousSlide();
// };

$('#owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true
    },
    600:{
      items:2,
      nav:false
    },
    1000:{
      items:2,
      nav:true,
      loop:false
    }
  }
})


$('#owl-carousel-2').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true
    },
    600:{
      items:3,
      nav:false
    },
    1000:{
      items:3,
      nav:true,
      loop:false
    }
  }
})

