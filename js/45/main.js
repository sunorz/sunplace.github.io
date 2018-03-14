//后台传入的 标题列表
var arr = [{
		id: 1,
		name: "app",
		pid: 0
	}, {
		id: 2,
		name: "src",
		pid: 1
	}, {
		id: 3,
		name: "main",
		pid: 2
	}, {
		id: 4,
		name: "java",
		pid: 3
	}, {
		id: 5,
		name: "com.example.activitytest",
		pid: 4
	}, {
		id: 6,
		name: "MainActivity.java",
		pid: 5
	}, {
		id: 7,
		name: "res",
		pid: 3
	}, {
		id: 8,
		name: "layout",
		pid: 7
	}, {
		id: 9,
		name: "activity_main.xml",
		pid: 8
	}, {
		id: 10,
		name: "AndroidManifest.xml",
		pid: 3
	}

];

$(".innerUl").ProTree({
	arr: arr,
	simIcon: "fa fa-file",
	mouIconOpen: "fa fa-play fa-rotate-90",
	mouIconClose:"fa fa-play"
});