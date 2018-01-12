$(function(){
	$(".newnav li").mouseover(function(){
		$(this).find("ul").show();
			});
	$(".newnav li").not(".subm").mouseleave(function(){
		$(this).find("ul").hide();
	});
	//改变样式
	$(".newnav li").not(".subm").mouseover(function(){
		$(this).find("a:first").addClass("current");
	});
	$(".newnav li").not(".subm").mouseleave(function(){
		$(this).find("a").removeClass("current");
	});
	var w = $(".newnav li").not(".subm");
	w.width(w.width()+2);
	
});