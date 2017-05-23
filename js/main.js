$(document).ready(function() {
  $('.menu, .mobile-nav a').on('click', function() {
      $('.menu').toggleClass('menu-open');
      $('.mobile-nav').fadeToggle();
        $("body").toggleClass("overflow-hidden");
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);

$(window).on('load', function() { 
  $('#status').fadeOut(); // 
  $('#preloader').delay(350).fadeOut('slow');
  setTimeout(function(){
    wow.init();
  }, 950);
  setTimeout(function(){
    $('header').addClass('start');
  }, 950);
  
})

// Toggle projects
$(document).ready(function(){
    $('#show-more').hide();
    $('#view-all').click(function(event) {
          $('#show-more').slideToggle(1200);
          event.stopPropagation();
            $('html,body').animate({
            scrollTop: $("#show-more").offset().top},
            'slow');
    });
});

$('#view-all').click(function() {
    if ($(this).text() === 'View More') {
         $(this).text('View Less');
    }
    else {
        $(this).text('View More');
    }
});