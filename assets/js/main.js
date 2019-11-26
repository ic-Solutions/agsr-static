$(document).ready(function() {
  $("#wwa-show").on("click", function() {
    $(".what-we-are .lead.hide").slideToggle();
  });
  AOS.init({
    duration: 800
  });
});
