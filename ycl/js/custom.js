$(function(){var e=$(window),a=$("html, body"),b=$(".vertical-nav"),c=false;$(".preloader").delay(200).fadeOut(700,function(){$(this).remove()});$(".switch-button").on("click",function(){$(this).addClass("hide");$(".switched-styles").addClass("show")});$(".switched-styles .hide-button").on("click",function(){$(this).parent().removeClass("show");$(".switch-button").removeClass("hide")});$(".switched-styles ul li").on("click",function(){$("link[href*='color']").attr("href","css/colors/"+$(this).data("color")+"_color.css")});$(".vertical-nav .toggle-menu").on("click",function(){b.toggleClass("menu-active")});$(".vertical-nav .mini-menu > ul li a").on("click",function(f){f.preventDefault();var g=$(this);$(".vertical-nav").removeClass("menu-active");$(g.attr("href")).addClass("active").siblings("section").removeClass("active")});function d(){$(".progress-container").each(function(){var f=$(this).find(".progress-bar");f.css("width",f.attr("aria-valuenow")+"%")})}if(!c&&$("#about").scrollTop()>=$(".skills").offset().top){d();c=true}$("#about").on("scroll",function(){console.log($("#about").scrollTop());if(!c&&$("#about").scrollTop()>=$(".skills").offset().top){d();c=true}});$("#control li").on("click",function(){$(this).addClass("active").siblings("li").removeClass("active")});$("#filtr-container").filterizr({animationDuration:0.4});if($(".portfolio-content .item")[0]){$(".portfolio-content .item").magnificPopup({delegate:".icon-img",type:"image",gallery:{enabled:true}})}});