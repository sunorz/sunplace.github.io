// JavaScript Document
//导航栏
$(function () {
	var navLi=$(".menu .nav li");
	navLi.mouseover(function () {
		$(this).find("a").addClass("current");
		$(this).find(".box").stop().slideDown();
		
	})
	navLi.mouseleave(function(){
		$(this).find("a").removeClass("current");		
		$(this).find(".box").stop().slideUp();
	})
})
$(function () {
	var navLi=$(".menu .nav li a");
	navLi.mouseover(function () {
		$(".rdnav").stop().slideUp();
		
	})	
})
//第二层导航
$(function () {
	var navLi=$(".box a");
	navLi.mouseover(function () {
	var Y = $(this).offset().left+$(this).width()/2-50+10;
	$(this).next(".rdnav").css({'left' :Y});

	$(this).next(".rdnav").stop().slideDown();
	})
	navLi.mouseleave(function(){

		$(this).next(".rdnav").stop().slideUp();	
	})
})
//第三层
$(function () {
	$(".rdnav").mouseover(function () {
	var Y = $(this).offset().left;
	$(this).css({'left' :Y});
	$(this).stop().slideDown();
	})
	navLi.mouseleave(function(){
		$(this).stop().slideUp();	

	})
})
//语言切换	
$(function () {
	var navLi=$("#lang");	
	navLi.click(function () {	
		$('#lang').toggleClass('curlang');		
		$(".tran").stop().toggle();
	})
});	
