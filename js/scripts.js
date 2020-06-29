// Back To Top Arrow Method - 
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

// Shorthand for $( document ).ready()

Posted in: Using jQuery Core
$( document ).ready()

// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).on( "load", function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

// Experienced developers sometimes use the shorthand $() for $( document ).ready(). If you are writing code that people who aren't experienced with jQuery may see, it's best to use the long form.
$(function() {
    console.log( "ready!" );
});