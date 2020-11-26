$(document).ready(function functionName() {
  $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});
})

$(document).ready(function() {
  $('.about__slider').slick({
    arrows: false,
    dots: true,
  });
  $('.clients__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.rate__links .rate__lines').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active')
});
})
