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
   var maxSize = window.matchMedia('(max-width: 1200px)');
   var minSize = window.matchMedia('(min-width: 768px)');
   if (maxSize.matches)
   {
       if(minSize.matches)
       {
           $(".circuit-right").hide();
       }
   }
   else{
       $(".circuit-right").show();
   }
    
});

$(window).resize(function() {
var midSize = window.matchMedia('(max-width: 750px)');

if(midSize.matches)
{
     $(".circuit-right").show();
   
   
}
});

//$(function() {

function heightToggle(){
    var elem   = document.getElementById("#htmlcollapse");
    if($( "#htmlcollapse" ).hasClass('in'))
    {
        $('.skills-section').css("height","120vh");
        console.log("height is now 120vh");
        console.log("Window Width" + $(window).width());
        
    }
   else //if ($( "#htmlcollapse" ).css( "aria-expanded", "false" ))
   {
       if(($(window).width() < 768 ))
       {
            $('.skills-section').css("height","180vh");
            console.log("height is now 180vh");
            console.log("Window Width" + $(window).width());
       }
       else {
           $('.skills-section').css("height","150vh");
           console.log('Window width is not less than 768');
           console.log("Window Width" + $(window).width());
       }
    }
}
//});
