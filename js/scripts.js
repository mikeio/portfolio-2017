// Toggle Overlay
$(document).ready(function() {
  $('.burger, .mobile-overlay a').on('click', function() {
      $('.burger').toggleClass('nav-open');
      $('.mobile-overlay').toggleClass('open');
      $('body').toggleClass('fixed');
      $(".logo").fadeToggle(350);
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
        }, 1000);
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
    offset:       150,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();