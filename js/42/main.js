$(function(){
	$("#wrap").width($("input").width()+2);
	//初始化
	var mlist =['@qq.com',
				'@163.com',
				'@yahoo.com',
				'@outlook.com',
				'@gmail.com',
			    '@live.com',
			    '@live.cn',
			    '@sina.com',
			    '@126.com',
			    '@vip.qq.com',
			    '@foxmail.com',
			    '@139.com',
			    '@sohu.com',
			    '@hotmail.com',
			    '@189.cn',
			    '@wo.com.cn',
			    '@21cn.com'];
	mlist = mlist.sort();//排序
	$("#email").bind('input propertychange', function() {		
		var kwd =$(this).val();
		ckmail(kwd);
		var str ='';
		var cstr='';
		$.each(mlist,function(index,ele){
			//不包含@
			if(kwd.indexOf("@")===-1&&kwd.length>0){
				str+="<li>"+kwd+ele+"</li>";
			}
			//包含@
			else
			{
				//先截取@之前的内容
				var bstr = kwd.substring(0,kwd.indexOf("@"));
				//再截取剩下的包含@的内容
				var astr = kwd.substring(kwd.indexOf("@")+1,kwd.length);
				if(kwd.indexOf("@")+1===kwd.length)//@之后什么都没有
					{
						str+="<li>"+kwd.replace(/@/,"")+ele+"</li>";
					}
				else
					{
						
						if(ele.indexOf(astr)===1)
							{
								cstr+="<li>"+bstr+ele+"</li>";
								console.log(str);
							}
					}
				
				
			}
		});
		if(str.length>0)
			{
		$("#responseOutput").slideDown();
		$("#responseOutput").html(str+cstr);	
			}
	});
	//end of propertychange
	//动态绑定点击事件
	$("#responseOutput").on('click','li',function(){
		$("#email").val($(this).text());
		$("#responseOutput").fadeOut();
		ckmail($(this).text());
	});
	/**键盘事件
	   请参考sample-41*/

});
	//验证邮箱地址
	function ckmail(mail){
	var reg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if (!reg.test(mail)) { 
	   $("i").attr("class","fa fa-times");
       return false;  
	}
	else{
		$("i").attr("class","fa fa-check");
       return true;  
	}
	}