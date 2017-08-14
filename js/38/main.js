$(function(){		
	$("#line").css("left",$("#vertical-line span:first").position().left+6.5);
	$("#line-h").css("left",$("#horizontal-line span:first").position().left+6.5);
	$("#horizontal-line span").css("left",$("#horizontal-line span").position().left-7.5);
	$(".card-h").css("marginTop",90-$(".line-top").height());
	$("#horizontal-line span").css("top",$(".line-top").height()+4);
			if($("#wrap-h").width()>$("#horizontal-line").width()){
			$("#wrap-h").css("overflow","hidden");
		}
		else
			{
				$("#wrap-h").css("overflow","scroll-x");
			}
	$(window).resize(function(){
	$("#line").css("left",$("#vertical-line span:first").position().left+6.5);	
		if($("#wrap-h").width()>$("#horizontal-line").width()){
			$("#wrap-h").css("overflow","hidden");
		}
		else if($("#wrap-h").width()<$("#horizontal-line").width())
			{
				$("#wrap-h").css("overflowX","auto");
			}
	});
	$("span").mouseover(function(){$(this).css("background","#39AC3C");});
	$("span").mouseleave(function(){$(this).css("background","#CCE8CF");});
});