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
	
	$.get("js/50/lists.json",function(data){  
	$("#btn5").click(function(){
		var c = {
		"category":"COOKING",
		"title":"Everyday Italian",
		"author":"Giada De Laurentiis",
		"year":"2005",
		"price":30.00
		};
		data.books.push(c);//数组操作，添加元素json[属性名]=xxx
		var cltime = new Date();
		if($(".output").html().indexOf("<")<0)
			{
		$(".output").text("");
			}
		$(".output").append("<span style='color:#adadad;'>["+(cltime.getFullYear()+"/"+(cltime.getMonth()+1)+"/"+cltime.getDate()+"  "+cltime.getHours()+":"+pad(cltime.getMinutes(),2)+":"+pad(cltime.getSeconds(),2))+"]</span> 库存："+data.books.length+"本。<br/>");
		$(".output").scrollTop(800);

	});	
	$("#btn6").click(function(){
		//获得现在的数目
		var datalength = data.books.length;
		var cltime = new Date();
		if($(".output").html().indexOf("<")<0)
			{
		$(".output").text("");
			}
		if(datalength>0){
	    data.books.pop();//删除最后一个元素，删除指定下标元素：array.splice(起始下标,删除的长度)，删除json属性：delete json.属性名
		$(".output").append("<span style='color:#adadad;'>["+(cltime.getFullYear()+"/"+(cltime.getMonth()+1)+"/"+cltime.getDate()+"  "+cltime.getHours()+":"+pad(cltime.getMinutes(),2)+":"+pad(cltime.getSeconds(),2))+"]</span> 库存："+data.books.length+"本。<br/>");
		}
		else
			{
				$(".output").append("<span style='color:#adadad;'>["+(cltime.getFullYear()+"/"+(cltime.getMonth()+1)+"/"+cltime.getDate()+"  "+cltime.getHours()+":"+pad(cltime.getMinutes(),2)+":"+pad(cltime.getSeconds(),2))+"]</span> 库存：0本。（已到最小值）<br/>");
			}
		$(".output").scrollTop(800);

	});	
		});
	
});
function pad(num, n) {  
    var len = num.toString().length;  
    while(len < n) {  
        num = "0" + num;  
        len++;  
    }  
    return num;  
}  