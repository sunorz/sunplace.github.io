// Copyright By Sunplace
$(function(){
	$("#btn1").click(function(){
		$(".output").text("");
		$.getJSON("js/50/lists.json",function(data){  			
			$(".output").append(data.toString());			
		});
		
	});
	$("#btn2").click(function(){
		$(".output").text("");
		$.getJSON("js/50/lists.json",function(data){  
			for(var i=0;i<data.books.length;i++){
				$(".output").append("title"+i+":《"+data.books[i].title+"》<br/>");	
			}
			
		});
		
	});
	$("#btn3").click(function(){
		$.get("js/50/lists.json",function(data){  
			var price2 = data.books[1].price;
			$(".output").text("￥"+price2);
		});
		
	});	
	$("#btn4").click(function(){
		$.get("js/50/lists.json",function(data){  
			var price3 = data.books[2].price;
			var price3l = Math.round(price3*0.8*100)/100;//打8折		
			data.books[2].price=price3l;
			$(".output").text("￥"+price3+"->￥"+data.books[2].price);//只是对取出的data进行修改，不能保存到文件
		});
		
	});	
});