// sticky menu
$(window).on('scroll', function(){
    var winscroll = $(this).scrollTop();

    if(winscroll>=400){
        $('#header').addClass('stickyNav');
    } else{
        $('#header').removeClass('stickyNav');
    }

});

//counter
$('.counter').counterUp({
    delay: 10,
    time: 1500
  });
  