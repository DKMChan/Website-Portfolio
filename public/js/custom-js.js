$(document).ready(function() {
  //allow for mobile swipes
        $("#skillCarousel").swiperight(function() {
            $(this).carousel('prev');
        });
        $("#skillCarousel").swipeleft(function() {  
            $(this).carousel('next');
        });
        
      mobileHeight();
 
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


function mobileHeight(){
    var mobilescreenSize = window.matchMedia('(max-width: 400px)');
   if(mobilescreenSize.matches)
   {
      // $(".circuit-right").hide();
       $('.contact-link').css("font-size",".8em");
       
   }
}
