$(function(){
	$("#email").bind('input propertychange', function() {	
		ckMail($(this).val(),$(this));
	});
});
//变换样式
function setStyle(obj,code){
		switch(code){
			case 0:
				obj.next("i").attr("class","fa fa-filter fa-2x form-control-feedback");
				break;
			case 1:
				obj.next("i").attr("class","fa fa-check fa-2x form-control-feedback");                                                                                                                                                                                                          
				break;
			case -1:
				obj.next("i").attr("class","fa fa-times fa-2x form-control-feedback");
				break;
			default:
				obj.next("i").attr("class","fa fa-filter fa-2x form-control-feedback");
				break;
		}
}
//验证邮箱地址
function ckMail(mail,obj){
//正则表达式
var reg = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-zd]{2,6}$/; 
//过滤（可选）
var filter = ['qq.com','163.com','outlook.com','sina.com'];
filter=filter.sort();
	if($.trim(mail)==='')//为空
	{ 
		setStyle(obj,0);
		return false;  
	}	
	else
	{//不为空
		$.each(filter,function(index,ele){
			if(reg.test(mail)&&(mail.lastIndexOf(ele)===(mail.indexOf("@")+1))){
				//符合正则且后缀符合要求
				setStyle(obj,1);
				return false;  		
			}
			else
			{
				setStyle(obj,-1);
			}
		});
	}
	
	

}