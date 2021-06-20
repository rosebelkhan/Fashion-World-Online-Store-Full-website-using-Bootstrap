
/*header nav */


jQuery(document).ready(function($){
	"use strict";

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		}else{
			$("header").removeClass("background-header");
		}
	});

	//preloader

	$('#preloader').animate({
		'opacity': '0'
	},500, function(){
		setTimeout(function(){
			$('#preloader').css("visibility","hidden").fadeOut();
		},300);
	});

/*product filter*/

$('.filters ul li').click(function(){
	$('.filters ul li').removeClass('active');
	$(this).addClass('active');

	var data = $(this).attr('data-filter');
	$grid.isotope({
		filter: data
	})
});

	var $grid = $(".grid").isotope({
		itemSelector: ".all",
		percentPosition: true,
		masonary: {
			columnWidth: ".all"
		} 
	})







/*header slider */

if ($('.owl-banner').length) {
	$('.owl-banner').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		margin: 0,
		autoplay: false,
		smartSpeed: 700,
		autoplayTimeout: 6000,
		responsive: {
			0:{
				items: 1,
				margin: 0
			},
			460:{
				items: 1,
				margin: 0
			},
			576:{
				items: 1,
				margin: 0
			},
			992:{
				items: 1,
				margin: 0
			},
		}
	})
}


/*client slider */

if ($('.owl-clients').length) {
	$('.owl-clients').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		margin: 30,
		autoplay: false,
		smartSpeed: 700,
		autoplayTimeout: 6000,
		responsive: {
			0:{
				items: 1,
				margin: 0
			},
			460:{
				items: 1,
				margin: 0
			},
			576:{
				items: 1,
				margin: 0
			},
			992:{
				items: 5,
				margin: 30
			},
		}
	})
}


});




