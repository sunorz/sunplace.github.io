// Copyright By Sunplace
$(function(){
	$(".trans").click(function(){
		var code = $(this).attr("id");		
		ajaxlang(code);
	});
});
	function ajaxlang(code){
		$.get("xml/48/"+code+".xml",function(xml){  
			$(xml).find("tcell").each(function(index,ele){
				fun(index,$(ele).text());
			});
		});  
		$.cookie('setlang',code);//更新cookie
	}
	function fun(nindex,nele){
		$("body *[id^=ts]").each(function(index,ele){
			if(index==nindex)
				{
					$(ele).text(nele);
					return;
				}
		});
	}
//初始化
	if($.cookie('setlang'))
		{
			//有cookie
			var langs = $.cookie('setlang');
			ajaxlang(langs);
		}
	else
		{
		var lang = navigator.language || navigator.userLanguage;
			switch(lang){
				case "en-US":ajaxlang("enus");break;
				case "zh-CN":ajaxlang("zhcn");break;
				default:ajaxlang("zhcn");break;
			}	
		}