/////// Sidebar Function
// Opened
$(".navbar__hamburger").on("click", function() {
  $(".sidebar").toggleClass("opened");
});
// Closed
$(".sidebar__cancel").on("click", function() {
  $(".sidebar").toggleClass("opened");
});