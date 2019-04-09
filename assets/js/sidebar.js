$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
  });
});
$("#menuToggle").click(function(e) {
  e.preventDefault();
  $("body").toggleClass("-active");
  $(".-sidebar").toggleClass("-active");
  $(".-backdrop").toggleClass("-active");
});
$("#backdropMB").click(function(e) {
  e.preventDefault();
  $("body").toggleClass("-active");
  $(".-sidebar").removeClass("-active");
  $(".-backdrop").toggleClass("-active");
});
