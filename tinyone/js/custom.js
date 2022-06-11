// sticky navbar
$(function(){
    "use strict";
    
    $(window).on('scroll', function(){
        var sticky = $(this).scrollTop();

        if(sticky>=400){
            $("#header").addClass("stickyNav");
        } else{
            $("#header").removeClass("stickyNav");
        }
    });
})


// hero slider
$(function(){
    "use strict";
    $('.slider_cont').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: false,
        mobileFirst: true,
        dots: true,
        arrows: false,      
    });

});