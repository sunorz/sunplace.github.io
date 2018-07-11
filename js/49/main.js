// Copyright By Sunplace
$(function(){
	$("#btn1").click(function(){
		$(".output").text("");
		$.get("xml/49/lists.xml",function(xml){  
			$(xml).find("bookstore").each(function(index,ele){
				$(".output").append($(ele).text());
			});
		});
		
	});
	$("#btn2").click(function(){
		$(".output").text("");
		$.get("xml/49/lists.xml",function(xml){  
			$(xml).find("title").each(function(index,ele){
				$(".output").append("title"+index+":《"+$(ele).text()+"》<br/>");
			});
		});
		
	});
	$("#btn3").click(function(){
		$.get("xml/49/lists.xml",function(xml){  
			var author = $(xml).find("book[category='WEB']").children("author").text();
			$(".output").text("author:"+author);
		});
		
	});
	$("#btn4").click(function(){
		$.get("xml/49/lists.xml",function(xml){  
			var price = $(xml).find("book:eq(1)").children("price").text();
			$(".output").text("￥"+price);
		});
		
	});
	$("#btn5").click(function(){
		$(".output").text("");
		$.get("xml/49/lists.xml",function(xml){  
			$(xml).find("title").each(function(index,ele){
				$(".output").append("lang"+index+":"+$(ele).attr("lang")+"<br/>");
			});
		});
		
	});
});