$(document).ready(function() {
  //allow for mobile swipes
        $("#skillCarousel").swiperight(function() {
            $(this).carousel('prev');
        });
        $("#skillCarousel").swipeleft(function() {  
            $(this).carousel('next');
        });
        
    
 
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


//hide and display circuit.svg images based on window size
$(window).resize(function() {
   var minSize = window.matchMedia('(max-width: 500px)');

       if(minSize.matches)
       {
           $(".circuit-right").hide();
       }
   
   else{
       $(".circuit-right").show();
   }
    
});




//change the height of the skill-section to accomodate extra space taken up by open panels
function heightToggle(maxheight,minheight, winwidth,panelID){
    var elem   = document.getElementById(panelID);
    if($(panelID).hasClass('in'))
    {
        $('.skills-section').css("height", minheight + "vh");
    }
   else
   {
       if(($(window).width() <= 400 ))
       {
           var newheight = maxheight + 50
           $('.skills-section').css("height", newheight + "vh");
       }
       else if(($(window).width() < winwidth ))
       {
            $('.skills-section').css("height", maxheight + "vh");
         
       }
       else {
           $('.skills-section').css("height","150vh");
         
       }
    }
}

function mobileHeight(){
    var mobilescreenSize = window.matchMedia('(max-width: 400px)');
   if(mobilescreenSize.matches)
   {
       $('.skills-section').css("height","200vh");
        $('.portfolio-section').css("height","50vh");
       $('.skills-section').css("padding-top","250px");
       $('.contact-section').css("padding-top","250px");
       
   }
}
