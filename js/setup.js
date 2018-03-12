document.querySelector('.nav-item.hamburger-button').addEventListener("click", function(){
  displayMenu(document.querySelector('nav'))
});
document.querySelector('.left-carousel-nav .left-button').addEventListener("click", function(){
  carouselShift(document.querySelectorAll('.element-carousel .carousel-item'),document.querySelector('.left-carousel-nav .left-button'));
});
document.querySelector('.right-carousel-nav .right-button').addEventListener("click", function(){
  carouselShift(document.querySelectorAll('.element-carousel .carousel-item'),document.querySelector('.right-carousel-nav .right-button'));
});