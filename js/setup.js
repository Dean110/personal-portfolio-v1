document.querySelector('.nav-item.hamburger-button').addEventListener("click", function(){
	displayMenu(document.querySelector('nav'));
});
document.querySelector('.left-carousel-nav .left-button').addEventListener("click", function(){
	carouselShift(document.querySelectorAll('.element-carousel .carousel-item'),document.querySelector('.left-carousel-nav .left-button'));
	if(document.querySelectorAll('.project.show').length) {
		displayMenu(document.querySelectorAll('.project.show'));
	}
});
document.querySelector('.right-carousel-nav .right-button').addEventListener("click", function(){
	carouselShift(document.querySelectorAll('.element-carousel .carousel-item'),document.querySelector('.right-carousel-nav .right-button'));
	if(document.querySelectorAll('.project.show').length) {
		displayMenu(document.querySelectorAll('.project.show'));
	}
});
document.querySelectorAll('.projects .project-button').forEach(function(button){
	button.addEventListener("click", function(){
		toggleMenu(button.parentElement.parentElement);
	});
});

document.querySelector('.project-1-screenshot').addEventListener("click", function(){
	if(document.querySelectorAll('.project.show').length) {
		displayMenu(document.querySelectorAll('.project.show'));
	}
	displayMenu(document.querySelector('.project-1'))
});
document.querySelector('.project-2-screenshot').addEventListener("click", function(){
	if(document.querySelectorAll('.project.show').length) {
		displayMenu(document.querySelectorAll('.project.show'));
	}
	displayMenu(document.querySelector('.project-2'))
});
document.querySelector('.project-3-screenshot').addEventListener("click", function(){
	if(document.querySelectorAll('.project.show').length) {
		displayMenu(document.querySelectorAll('.project.show'));
	}
	displayMenu(document.querySelector('.project-3'))
});
document.querySelector('.project-4-screenshot').addEventListener("click", function(){
	if(document.querySelectorAll('.project.show').length) {
		displayMenu(document.querySelectorAll('.project.show'));
	}
	displayMenu(document.querySelector('.project-4'));
	displayMenu(document.querySelectorAll('.about-picture'));
});