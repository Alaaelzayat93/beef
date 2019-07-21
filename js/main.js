/*global $,alert,console*/




//links active
$('.nav-link').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});







/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementByclass("navbar").style.top = "0";
  } else {
    document.getElementByclass("navbar").style.top = "-50px";
  }
}*/
/*slider*/
 $(window).scroll(function(){
var navbar = $('.navbar');
if($(window).scrollTop() >= navbar.height()){
if(!navbar.hasClass('scrolled')){
navbar.addClass('scrolled fixed-top');
} 
}else{
navbar.removeClass('scrolled navbar-fixed-top');
}
});





