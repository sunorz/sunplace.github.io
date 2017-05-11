//初始化
function init()
	{
		$("#cover").css('height',$(window).height());
		//点击关闭按钮
		$("#close").click(function(){
			
			$("#cover").fadeOut();

		})
		//点击缩略图
		$(".thumbnail").click(function(even){
			event.preventDefault();//阻止超链接的默认行为
			$("#lgpic").attr('src',$(this).parent('a').attr('href'));			
			$("#cover").fadeIn(function(){
			setsize();
				console.log($("#close").offset().top);
			});


		})

	}
//主函数
$(function(){
	init();	
	//改变窗口尺寸
	$(window).resize(function(){
		init();
		setsize();
		
	})
	
});
//设置大图尺寸	
function setsize(){
if($("#lgpic").is(":visible"))
{
//------获取图片真实尺寸------
var screenImage = $("#lgpic");
var theImage = new Image();
theImage.src = screenImage.attr("src");
var imageWidth = theImage.width;
var imageHeight = theImage.height;
//------End of 获取图片真实尺寸------	

//自适应
if($(window).width()<=imageWidth)
{
$("#lgpic").width($(window).width()*0.9-16);
closeico();
}
else if($(window).width()>imageWidth)
{
	if(imageWidth>500)
		{
			$("#lgpic").width(500);
		}
	else
		{
			$("#lgpic").width(imageWidth);
		}

closeico();
}
}

}
//“关闭按钮”的定位	
function closeico(){
	
	$("#close").offset({top:$("#lgpic").offset().top-15,left:$("#lgpic").offset().left+$("#lgpic").width()+5});
	
}