// Mobile overlay
$(document).ready(function() {
  $('.burger, .nav_mobile a').on('click', function() {
      $('.burger').toggleClass('nav-open');
      $(".nav_mobile").fadeToggle(250);
      $('body').toggleClass('fixed');
      $(".logo").fadeToggle(250);
  });
});

// Toggle projects
$(document).ready(function(){
    $("#view-all").click(function(){
      $("#show-more").slideToggle('slow');
      $('html,body').animate({
        scrollTop: $("#show-more").offset().top},
        'slow');
      setTimeout(function(){
        $(".project-footer").addClass("closed");
      }, 500);
    });
});

// Smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });
});

// Wow.js
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       200,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

// Disable Wow.js
(function($) {
    var $window = $(window),
        $html = $('.large-6.columns.wow.fadeInLeft, .large-6.columns.wow.fadeInRight, .large-6.columns.wow.fadeIn');

    function resize() {
        if ($window.width() < 1024) {
            return $html.addClass('static');
        }

        $html.removeClass('static');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);

// Preloader
$(window).on('load', function() { 
  $('#status').fadeOut(); // 
  $('#preloader').delay(350).fadeOut('slow'); 
})

// jquery-mdl
$('#bt1').mdl({
  type: 'modal',
  fullscreen:true,
  overlayClick:false
});

$('#bt2').mdl({
  type: 'modal',
  fullscreen:true,
  overlayClick:false
});


// Toggle projects
$(document).ready(function(){
    $("#bt1, #bt2").click(function(){
      setTimeout(function(){
        $("body").toggleClass("overflow-hidden");
      }, 500);
    });
});

$(document).ready(function(){
    $(".mdl-close").click(function(){
        $("body").toggleClass("overflow-hidden");
    });
});