// Slideshow Slick

// Review Carousel
$('.testimonial__content').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: '.testimonial__nav.nav--left',
  nextArrow: '.testimonial__nav.nav--right',
});