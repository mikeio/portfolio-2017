$(document).ready(function(){function e(){var e=$("#initial ul li .container"),o=e.length,t=Math.floor(Math.random()*o);e.removeClass("active"),e.eq(t).addClass("active")}function o(){var e=$("#show-more ul li .container"),o=e.length,t=Math.floor(Math.random()*o);e.removeClass("active"),e.eq(t).addClass("active")}$(".menu, .mobile-nav a").on("click",function(){$(".menu").toggleClass("menu-open"),$(".mobile-nav").fadeToggle(),$("body").toggleClass("overflow-hidden")}),$(".logo").hover(function(){$(this).toggleClass("start")}),$("#show-more").hide(),$("#view-all").click(function(e){$("#show-more").slideToggle(1200),e.stopPropagation(),$("html,body").animate({scrollTop:$("#show-more").offset().top},"slow")}),e(),setInterval(function(){e()},7e3),o(),setInterval(function(){o()},7e3),function($){function e(){return o.width()<1024?t.addClass("disable-wow"):void t.removeClass("disable-wow")}var o=$(window),t=$(".logo, .intro, .work ul li");o.resize(e).trigger("resize")}(jQuery),$("#view-all").click(function(){"View More"===$(this).text()?$(this).text("View Less"):$(this).text("View More")}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1200),!1}})});const t=document.querySelectorAll("[data-chaffle]");Array.prototype.forEach.call(t,function(e){const o=new Chaffle(e,{lang:"en",speed:100,delay:400});e.addEventListener("mouseover",function(){o.init()})})}),$(window).load(function(){$("#loading img").fadeOut(600),$("#loading").delay(300).fadeOut(600);var e=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(e){},scrollContainer:null});e.init()});