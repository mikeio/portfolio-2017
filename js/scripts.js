// Toggle Overlay
$(document).ready(function() {
    $(".nav-toggle").click(function() {
        $(".logo").fadeToggle();
        $('body').toggleClass('no-scroll');
        $(this).toggleClass('nav-open');
        $( ".overlay" ).fadeToggle();
    });
});

// $(document).ready(function(){
//   function show(){
//   $(".overlay")  .velocity({position:"fixed",top:"0",zIndex:"3",display:"none",overflow:"auto",width:"100%",height:"100%",backgroundColor:"#1f2021",color:"#ffffff",paddingTop:"75px",willChange:"display"},1000)
//   .velocity({width:"50%",marginLeft:"30%"},500)
//   .velocity({height: 150,
//              marginTop:"-=50px"
//             },500,function(){
//     $("h1").velocity("transition.flipXIn",500);
//     $("hr").velocity({opacity:1},500);
//   });
// };
//   
//  function hide(){
//   $("h1").velocity("transition.flipXOut",500);
//   $("hr").velocity({opacity:0},500, function(){
//   $(".head")
//   .velocity({height: 0,
//              marginTop:"+=50px"           },500)
//   .velocity({width:"20px"
//             ,marginLeft:"8px"
//             ,borderColor:"#f0f0f0"},500);
//   });
// };
//   
//   
// $(".nav-toggle").click(function () {
//   if ($("h1").is(':visible'))
//     { 
//       hide();
//     } else {
//       show();
//     }
//   });
// });

// Toggle Projects
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

//Smooth Scroll
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
