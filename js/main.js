$(window).on('load', function() { 
  $('#status').fadeOut(); // 
  $('#preloader').delay(350).fadeOut(600);
  setTimeout(function(){
    wow.init();
  }, 950); 
})

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

(function($) {
    var $window = $(window),
        $html = $('.logo, .intro, .work ul li');

    function resize() {
        if ($window.width() < 1024) {
            return $html.addClass('disable-wow');
        }

        $html.removeClass('disable-wow');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);


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
        }, 1200);
        return false;
      }
    }
  });
});


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


if (document.images) {
  img01 = new Image();
  img02 = new Image();
  img03 = new Image();
  img04 = new Image();
  img05 = new Image();
  img06 = new Image();
  img07 = new Image();
  img08 = new Image();
  img09 = new Image();
  img10 = new Image();
  img11 = new Image();
  img12 = new Image();
  img13 = new Image();
  img14 = new Image();
  img15 = new Image();
  img16 = new Image();
  img17 = new Image();
  img18 = new Image();
  img19 = new Image();
  img20 = new Image();
  img21 = new Image();
  img22 = new Image();
  img23 = new Image();
  img24 = new Image();
  img25 = new Image();
  img26 = new Image();
  img27 = new Image();
  img01.src = "./img/glitch/logo01.png";
  img02.src = "./img/glitch/logo02.png";
  img03.src = "./img/glitch/logo03.png";
  img04.src = "./img/glitch/logo04.png";
  img05.src = "./img/glitch/logo05.png";
  img06.src = "./img/glitch/logo06.png";
  img07.src = "./img/glitch/logo07.png";
  img08.src = "./img/glitch/logo08.png";
  img09.src = "./img/glitch/logo09.png";
  img10.src = "./img/glitch/logo10.png";
  img11.src = "./img/glitch/logo11.png";
  img12.src = "./img/glitch/logo12.png";
  img13.src = "./img/glitch/logo13.png";
  img14.src = "./img/glitch/logo14.png";
  img15.src = "./img/glitch/logo15.png";
  img16.src = "./img/glitch/logo16.png";
  img17.src = "./img/glitch/logo17.png";
  img18.src = "./img/glitch/logo18.png";
  img19.src = "./img/glitch/logo19.png";
  img20.src = "./img/glitch/logo20.png";
  img21.src = "./img/glitch/logo21.png";
  img22.src = "./img/glitch/logo22.png";
  img23.src = "./img/glitch/logo23.png";
  img24.src = "./img/glitch/logo24.png";
  img25.src = "./img/glitch/logo25.png";
  img26.src = "./img/glitch/logo26.png";
  img26.src = "./img/no-signal.gif";
}


const elements = document.querySelectorAll('[data-chaffle]');
Array.prototype.forEach.call(elements, function (el) {
  const chaffle = new Chaffle(el, {
    lang: 'en',
    speed: 100, // default: 20
    delay: 400, // default: 100
  });
  el.addEventListener('mouseover', function () {
    chaffle.init();
  });
});