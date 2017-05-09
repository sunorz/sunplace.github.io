$(function(){
   //初始化
   $(".menu li:first-child").addClass("curclick");
   $("dir:first-child").show();
   var tag = 0;
   //鼠标点击
   $(".menu li").click(function(){
   $(this).addClass("curclick");
   $(".menu li").not(this).removeClass("curclick");
   $(".menu li").removeClass("curhover");
   tag = $(this).index();
   $("dir:eq("+tag+")").show();
   $("dir").not("dir:eq("+tag+")").hide();	   
   });
   //鼠标悬停   
   $(".menu li").hover(function(){
   		if($(this).index()!==tag){
   			$(this).addClass("curhover");
		}
},function(){
	   if($(this).index()!==tag){
       $(this).removeClass("curhover");
	   }
});
		    




});