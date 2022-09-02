let slides = document.querySelectorAll('#slides .slider__slide');
let next = document.getElementById('next');
let previous = document.getElementById('prev');
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slider__slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slider__slide showing';
}

next.onclick = function() {
  nextSlide();
};
previous.onclick = function() {
  previousSlide();
};