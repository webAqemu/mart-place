$(function () {

	$('.search__categories').click(function (event) {
		$('.categories__list').toggleClass('active')
		$('.lnr-chevron-down').toggleClass('active')
	});

	$(".description__stars").rateYo({
		rating: 4.5,
		starWidth: "15px",
		readOnly: true,
	});

	$('.products-slider__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	var mixer = mixitup('.products__box');


});