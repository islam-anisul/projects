//sticky menu
$(function(){
  $(window).on('scroll',function(){
    var stickymenu=$(this).scrollTop();
    if(stickymenu>=400){
      $('#topbar').addClass('stickyNav');
    } else{
      $('#topbar').removeClass('stickyNav');
    }

  });
})

// hero slider
$('.slider_cont').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    prevArrow: '.left_arrow',
    nextArrow : '.right_arrow',
  });
  //portfolio
  var mixer = mixitup('.portfolio_item_wrapper');

  $(function(){
    $('.port_filter_btn').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
    });    
  });

  //video player
  $(document).ready(function(){
    $('.venobox').venobox();     
});
//counter
$('.counter').counterUp({
  delay: 10,
  time: 1500
});

// post
$('.post_cont').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow: '.preBTN',
  nextArrow: '.nxtBTN',
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]

});