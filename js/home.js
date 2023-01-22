// Tours Carousel
$('.tours__content').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: '.tours__head-nav.nav--left',
  nextArrow: '.tours__head-nav.nav--right',
});

// Destination Carousel
$('.destination__content').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: '.destination__head-nav.nav--left',
  nextArrow: '.destination__head-nav.nav--right',
});

// Testimonial Carousel
$('.testimonial__content').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: '.testimonial__nav.nav--left',
  nextArrow: '.testimonial__nav.nav--right',
});