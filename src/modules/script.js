$(document).ready(function () {
	$('.carousel__inner').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1200,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			}
		]
	});
});