// navbar smooth scroll
//smooth scroll
$(document).on('click','a[href^="#"]', function(event){
  "use strict";

  event.preventDefault();
  $(' html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top} ,2000);
});
//sticky navbar
$(function(){
  "use strict";
  
  $(window).on('scroll', function(){
      var sticky = $(this).scrollTop();

      if(sticky>=400){
          $("#topbar").addClass("sticky");
      } else{
          $("#topbar").removeClass("sticky");
      }
  });
})

// banner slider
var menu = ['Slide 1', 'Slide 2', 'Slide 3']
var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
    },
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

// about us video play
$(document).ready(function(){
  $('.venobox').venobox(); 
});

//counter
$('.counter').counterUp({
  delay: 10,
  time: 1500
});

// pricing slider
$('.pricing_slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow: '.preBTN',
  nextArrow: '.nxtBTN',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
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

//testimonial
$('.testimonial_slide_cont').slick({
  infinite: true, 
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: '0',
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});