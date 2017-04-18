// Toggle Menu
$(document).ready(function() {
  $('.burger, .mobile-overlay a').on('click', function() {
      $('.burger').toggleClass('nav-open');
      $(".mobile-overlay").fadeToggle(250);
      $('body').toggleClass('fixed');
      $(".logo").fadeToggle(250);
  });
});

// Toggle Projects
$(document).ready(function(){
    $("#view-all").click(function(){
        $("#show-more").slideToggle(1000);
        $('#view-all').text(function(i, text){
          return text === "View More" ? "View Less" : "View More";
      })
    });
});

// Smooth Scroll
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


// Stop animations on mobile
(function($) {
    var $window = $(window),
        $html = $('.wow-lrg');

    function resize() {
        if ($window.width() < 1024) {
            return $html.addClass('wow-disabled');
        }

        $html.removeClass('wow-disabled');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);