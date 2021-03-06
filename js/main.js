$(document).ready(function() {

    $('.menu, .mobile-nav a').on('click', function() {
        $('.menu').toggleClass('menu-open');
        $('.mobile-nav').fadeToggle();
        $("body").toggleClass("overflow-hidden");
    });

    $(".logo").hover(function () {
       $(this).toggleClass("start");
    });

//    setTimeout(function(){ 
//        $(".logo").addClass("start").delay(2000).queue(function(){
//            $(this).removeClass("start").dequeue();
//        });
//    }, 600);
    
    $('#show-more').hide();
    $('#view-all').click(function(event) {
        $('#show-more').slideToggle(1200);
        event.stopPropagation();
        $('html,body').animate({
                scrollTop: $("#show-more").offset().top
            },
            'slow');
    });

    setRandomClass1();
    setInterval(function () {
        setRandomClass1();
    }, 9000);
    
    function setRandomClass1() {
        var items = $("#initial ul li .container");
        var number = items.length;
        var random = Math.floor((Math.random() * number));
        items.removeClass("active");
        items.eq(random).addClass("active");
    }

    setRandomClass2();
    setInterval(function () {
        setRandomClass2();
    }, 9000);
    
    function setRandomClass2() {
        var items = $("#show-more ul li .container");
        var number = items.length;
        var random = Math.floor((Math.random() * number));
        items.removeClass("active");
        items.eq(random).addClass("active");
    }

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

    $('#view-all').click(function() {
        if ($(this).text() === 'View More') {
            $(this).text('View Less');
        } else {
            $(this).text('View More');
        }
    });
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200);
                    return false;
                }
            }
        });
    });
    
    const elements = document.querySelectorAll('[data-chaffle]');
    Array.prototype.forEach.call(elements, function(el) {
        const chaffle = new Chaffle(el, {
            lang: 'en',
            speed: 100, // default: 20
            delay: 400, // default: 100
        });
        el.addEventListener('mouseover', function() {
            chaffle.init();
        });
    });

});


$( window ).load(function() {
  $("#loading img").fadeOut(600);
  $("#loading").delay(300).fadeOut(600);
  var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
});


