<?php
 $resarry = array(
	 array("Ana","Ana是什么歌曲？"),
	 array("Angel","Angel的77个含义。"),
	 array("Bob","你找错人了吧?"),
	 array("Bobbaby","随便写的，不要见怪啊。"),
	 array("Java","从入门到跳槽。")
 );
$flag = 0;


if($_POST['keywds']!=null){
 $postdata = $_POST['keywds'];


for($i=0;$i<count($resarry);$i++)
{
	if(stripos($resarry[$i][0],$postdata)>-1)
	{
	print("<li>".$resarry[$i][0]."</li>");
	$flag++;
	}	
} 

if($flag==0){
	print("<p>也许没有结果就是最好的结果。</p>");
}

}

if($_POST['title']!=null){
	for($i=0;$i<count($resarry);$i++)
{
	if(stripos($resarry[$i][0],$_POST['title'])>-1)
	{
	print("<a href='#'>".$resarry[$i][0]."</a>");
	print("<br/><span style='font-size:12px;'>".$resarry[$i][1]."</span><br/>");
	}

} 
}

?>