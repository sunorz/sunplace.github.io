<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>提交检测</title>
<link href="../css/main.css" rel="stylesheet" type="text/css">
</head>

<body>
<!--Copyright By Sunplace-->
<p style="padding: 10px;line-height: 2;">从之前页面传来的数据如下：<br/>
<?php
	
	if($_POST)
	{
		print_r($_POST);
	}
	?>
	</p>
</body>
</html>