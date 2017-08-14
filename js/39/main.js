$(".codeblock").each(function(index,ele){
		//循环代码块
		var arr=$(this).html().split("\n");
		var textc = "";	//代码初始化
		var text="<ol class='linenum'>"//行号初始化
		$(arr).each(function(index,ele){
			//循环行
			if(index!=arr.length-1){		
				arr[index]='<span name="L'+(index+1)+'">'+arr[index]+'</span>';
				text+="<li></li>";
			}	
				if(index!=arr.length-1){
					arr[index]+="\n";
				}
				textc+=arr[index];

			});
		        text+="</ol>";
				$(this).html(textc);
		        $(this).append(text);
		        setHeight();
		        initLine($(this));
				
	});

	function setHeight(){
	$("span[name^=L]").each(function(index,ele){
		var j=$(this).next().position().top-$(this).position().top;
		if(j>0){
			$(".linenum li:eq("+index+")").height(j);
		}
	});
	}
	
	//行高亮
	function initLine(obj){
		var hightline = obj.attr("line");
		if(hightline!=null)
			{
		var arr = obj.attr("line").split(',');
		$(arr).each(function(index,ele){
			//console.log(obj.find("span[name=L"+ele+"]").text());
			obj.find("span[name=L"+ele+"]").addClass("mark");
		});
			}
	}
	$(window).resize(function(){
		setHeight();
	});