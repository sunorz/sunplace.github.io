$(".codeblock").each(function(index,ele){
	//循环代码块
	var arr=$(this).html().split("\n");

	var textc = "";	//代码初始化
	var sline=startLine($(this));
	if(sline>1){
		arr.splice(arr.length-1,1);//移除最后一个空白
	}
	var maxline=sline+arr.length-1;
	$(this).css("marginLeft",maxline.toString().length+1+"em");
	var text="<ol class='linenum' start='"+sline+"'>"//行号初始化

	$(arr).each(function(index,ele){
		//循环行

		if(arr[index].trim()==""){arr[index]="&nbsp;";}
		arr[index]='<div name="L'+sline+'">'+arr[index]+'</div>';
		text+="<li></li>";		
		textc+=arr[index];
		sline++;	

		});
	
	text+="</ol>";
	$(this).html(textc);
	$(this).append(text);	
	initLine($(this));

});

//窗口变化
$(window).resize(function(){
	setHeight();
});

//行高亮
function initLine(obj){
	var hightline = obj.attr("line");
	if(hightline!=null)
	{
		var arr = obj.attr("line").split(',');
		$(arr).each(function(index,ele){
			obj.find("div[name=L"+ele+"]").addClass("codemark");
		});
	}
}
//指定行开始
function startLine(obj){
	var sline = obj.attr("start");
	if(sline!=null)
	{
		return sline;
	}
	else
	{
		return 1;
	}
}
//设置行号对齐
function setHeight(){
	$("div[name^=L]").each(function(index,ele){
		var j=$(this).next().position().top-$(this).position().top;
		if(j>0){
			$(".linenum li:eq("+index+")").height(j);
		}	
	
			});
	$(".linenum").each(function(){
		$(this).height($(this).closest(".codeblock").height()-2);
	})
	}