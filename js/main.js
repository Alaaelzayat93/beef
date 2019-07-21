/*global $,alert,console*/
$(function(){
  'use strict'
  //adjust header height
  $('.header').height($(window).height());
  $(window).resize(function(){
    $('.header').height($(window).height());
    
});
  });



//links active
$('.nav-link').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});
///timeline//

var downArrow = document.getElementById("btn1");
var upArrow = document.getElementById("btn2");

downArrow.onclick = function () {
    'use strict';
    document.getElementById("first-list").style = "top:-620px";
    document.getElementById("second-list").style = "top:-620px";
    downArrow.style = "display:none";
    upArrow.style = "display:block";
};

upArrow.onclick = function () {
    'use strict';
    document.getElementById("first-list").style = "top:0";
    document.getElementById("second-list").style = "top:80px";
    upArrow.style = "display:none";
    downArrow.style = "display:block";
};








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





