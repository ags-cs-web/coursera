//preloader end
function NO_loader(){
	var preloader = document.getElementById('loader');
	preloader.style.display = 'none';
}

window.onscroll = function() {Upindicate()};
function Upindicate(){
	var Upi = document.getElementById('Indicate');
	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
		Upi.style.display = 'inline-flex';
	}
	else{
		Upi.style.display = 'none';
	}
}

// slider functions
document.querySelector('.right').addEventListener('click', function() {

	rightSlider()

});
document.querySelector('.left').addEventListener('click', function() {

	leftSlider()

});


function rightSlider() {

	document.querySelector('.welcome-part').classList.add('forward');
	document.querySelector('.welcome-part').classList.remove('back');
	document.querySelector('.wmi').classList.remove('not-visible');
	document.querySelector('.wmi').classList.add('back');
	document.querySelector('.wmi').classList.remove('forward');

	document.querySelector('.right').classList.add('colored');
	document.querySelector('.left').classList.remove('colored');

}

function leftSlider() {

	document.querySelector('.welcome-part').classList.toggle('forward');
	document.querySelector('.welcome-part').classList.toggle('back');


	document.querySelector('.wmi').classList.toggle('forward');
	document.querySelector('.wmi').classList.toggle('back');


	document.querySelector('.right').classList.toggle('colored');
	document.querySelector('.left').classList.toggle('colored');

}
//add functions for gallery slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// add function to mobile nav icons

document.querySelector('.nav-icon').addEventListener('click', 
	function()  
	{

		mobile1()
	}
);

document.querySelector('.close').addEventListener('click', 
	function() 
	{

		mobile2()
	}

);

function mobile1()
{
	document.querySelector('.menu').classList.add('opened');
	document.querySelector('.menu').classList.remove('closed');

	document.querySelector('.close').style.display = 'block';
}

function mobile2()
{
	document.querySelector('.menu').classList.remove('opened');
	document.querySelector('.menu').classList.add('closed');

	document.querySelector('.close').style.display = 'none';
}
