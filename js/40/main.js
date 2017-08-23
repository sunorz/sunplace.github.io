/*
	目录：
	1.采用定时器方法
	2.采用动画
	*/
	//1.采用定时器方法
	//全局变量
	var outerW = $(".outer").width();//外宽
	var ld = setInterval("loading("+outerW+")",1000);//执行定时器方法
	var increment = 20;//增量

function loading(outerW){	
	var interW = $(".inner").width();
	var precent = interW/outerW*100;
	if(precent==100){
		clearInterval(ld);
		$("#prec").text("100");
		$(".outer").delay(2000);
		$(".outer").fadeOut(function(){
			$(".disshow").html("完成.");
		});

	
	}	
	else if(precent+increment>=100){
		clearInterval(ld);
		$("#prec").text("100");
		$(".inner").css("width","100%");
		$(".outer").delay(2000);
		$(".outer").fadeOut(function(){
			$(".disshow").html("完成.");
		});

	}
	else
	{
		$(".inner").css("width",(precent+increment)+"%");
		$("#prec").text(Math.floor($(".inner").width()/$(".outer").width()*100));
	}
	
	
}
//2.采用动画
//animeload();//执行动画方法
function animeload(){
	var ald = setInterval(function(){
		$("#prec").text(Math.floor($(".inner").width()/$(".outer").width()*100));
	},100);
	 $(".inner").animate({width:"100%"},10000,"swing",function(){
		clearInterval(ald);	
		 $("#prec").text(100);
		 $(".outer").delay(2000);
		$(".outer").fadeOut(function(){
			$(".disshow").html("完成.");
		});
		
	 });

}