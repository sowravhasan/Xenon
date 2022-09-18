(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		/* Testimonial Slide Active */
		$(".testimonials").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			nav: false,
			dots: false,
		});

		/* Counter Up */
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});

		var $home = $('#home');
			$home.ripples({
				resolution: 512,
				dropRadius: 20,
				perturbance: 0.04,
			});
		
		/* Portfolio Popup */
		$('.gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* One Page Nav */
		$('.mainmenu ul').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			easing: 'swing',
			scrollOffset: 60
		});
	});


	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 1) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});
		
		/* Preloader */
		$(".preloader").fadeOut()
	});
}(jQuery));