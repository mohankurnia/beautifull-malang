/////// Sidebar Function
// Opened
$(".navbar__hamburger").on("click", function() {
  $(".sidebar").toggleClass("opened");
});
// Closed
$(".sidebar__cancel").on("click", function() {
  $(".sidebar").toggleClass("opened");
});

////// Navbar Function
// Scrolled
$(document).scroll(function () {
  var $nav = $(".navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});