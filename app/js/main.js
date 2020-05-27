$(function () {

	$('.search__categories').click(function (event) {
		$('.categories__list').toggleClass('active')
		$('.lnr-chevron-down').toggleClass('active')
	});

	$(".weekly__stars").rateYo({
		rating: 4.5,
		starWidth: "17px",
		readOnly: true,
	});

	$(".product__stars").rateYo({
		rating: 4.5,
		starWidth: "15px",
		readOnly: true,
	});

	$('.weekly__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	var mixer = mixitup('.newest__box');

	$('.feed__inner').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: true,
	});

});