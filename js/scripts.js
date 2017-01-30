// Toggle Overlay
$(document).ready(function() {
  $('.nav-toggle, .overlay a').on('click', function() {
      $('.nav-toggle').toggleClass('nav-open');
      $('.overlay').toggleClass('open');
      $('body').toggleClass('no-scroll');
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

window.sr = ScrollReveal();
  sr.reveal('.fadeInLeft', { 
    mobile: false, 
    viewFactor: 0.5, 
    distance: '30px',
    scale: 1, 
    duration: 1950, 
    origin: 'left', 
    easing: 'cubic-bezier(.18,1,.21,1)' });
  sr.reveal('.fadeInRight', { 
    mobile: false, 
    viewFactor: 0.5, 
    distance: '30px',
    scale: 1, 
    duration: 1950, 
    origin: 'right', 
    easing: 'cubic-bezier(.18,1,.21,1)' });
  sr.reveal('.nav-footer ul li, footer ul.social-icons li', { 
    mobile: false, 
    viewFactor: 1, 
    distance: '30px',
    scale: 1, 
    duration: 1950, 
    origin: 'bottom', 
    easing: 'cubic-bezier(.18,1,.21,1)' }, 100);