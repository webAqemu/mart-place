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

	$('.feed__inner').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToScroll: 1,
				}
			},

		]
	});

	$('.header__burger').on('click', function () {
		$('.header__menu-inner').slideToggle();
	});

	$('.header__item').on('click', function () {
		$(this).children('.header__dropdown').toggleClass('active');
	});

	$('.pages__col').on('click', function () {
		$(this).children('.pages__list').toggleClass('active');
	});

	$('.header__btn--top').on('click', function () {
		$('.header__box--top').toggleClass('active');
	});

	var mixer = mixitup('.newest__box');


});