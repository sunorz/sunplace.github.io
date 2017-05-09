$(function(){
   $(".menu li:first-child").css({background:"#fff",color:"#000"}).css('border-bottom-color','#fff');
   $("dir:first-child").show();
   $(".menu li").click(function(){
	   $(this).css({background:"#fff",color:"#000"}).css('border-bottom-color','#fff');
	   $(".menu li").not(this).css({background:"#CCCCCC",color:"#fff"}).css('border-bottom-color','#CCCCCC');
	   var tag = $(this).index();
	   $("dir:eq("+tag+")").show();
	   $("dir").not("dir:eq("+tag+")").hide();
	   
   })
});