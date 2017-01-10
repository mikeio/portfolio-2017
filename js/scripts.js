// Toggle Overlay
// $(document).ready(function() {
//     $(".nav-toggle").click(function() {
//         $(".logo").fadeToggle();
//         $('body').toggleClass('no-scroll');
//         $(this).toggleClass('nav-open');
//         $( ".overlay" ).fadeToggle();
//     });
// });

// Overlay Navigation
$(document).ready(function() {
  $('.nav-toggle').on('click', function() {
      $(this).toggleClass('nav-open');
      $('.overlay').toggleClass('open');
      $('body').toggleClass('no-scroll');
      $(".logo").fadeToggle();
  });
});

$(document).ready(function() {
  $('.overlay a').on('click', function() {
      $('.nav-toggle').toggleClass('nav-open');
      $('.overlay').toggleClass('open');
      $('body').toggleClass('no-scroll');
      $(".logo").fadeToggle();
  });
});

// View More/Less Projects
$(document).ready(function(){
    $("#view-all").click(function(){
        $("#show-more").slideToggle(1000);
    });
});

$(function(){
   $("#view-all").click(function () {
      $(this).text(function(i, text){
          return text === "View More" ? "View Less" : "View More";
      })
   });
})

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
