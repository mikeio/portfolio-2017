$(window).on("load",function(){$("#loading").fadeIn(1e3),$(".preloader").delay(2100).fadeOut(300),setTimeout(function(){wow.init()},950)}),$(document).ready(function(){$(".menu, .mobile-nav a").on("click",function(){$(".menu").toggleClass("menu-open"),$(".mobile-nav").fadeToggle(),$("body").toggleClass("overflow-hidden")}),$("#show-more").hide(),$("#view-all").click(function(e){$("#show-more").slideToggle(1200),e.stopPropagation(),$("html,body").animate({scrollTop:$("#show-more").offset().top},"slow")})});var wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(e){},scrollContainer:null});!function($){function e(){return o.width()<1024?n.addClass("disable-wow"):void n.removeClass("disable-wow")}var o=$(window),n=$(".logo, .intro, .work ul li");o.resize(e).trigger("resize")}(jQuery),$("#view-all").click(function(){"View More"===$(this).text()?$(this).text("View Less"):$(this).text("View More")}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1200),!1}})});const elements=document.querySelectorAll("[data-chaffle]");Array.prototype.forEach.call(elements,function(e){const o=new Chaffle(e,{lang:"en",speed:100,delay:400});e.addEventListener("mouseover",function(){o.init()})}),document.images&&(img01=new Image,img01.src="./img/loading.gif");