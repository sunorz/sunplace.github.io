//后台传入的 标题列表
var arr = [{
		id: 1,
		name: "*fonts",
		pid: 0
	}, {
		id: 2,
		name: "css",
		pid: 0
	}, {
		id: 3,
		name: "bootstrap.min.css",
		pid: 2
	}, {
		id: 4,
		name: "js",
		pid: 0
	}, {
		id: 5,
		name: "jquery-3.1.1.min.js",
		pid: 4
	}, {
		id: 6,
		name: "bootstrap.min.js",
		pid: 4
	}
];

$(".innerUl").ProTree({
	arr: arr,
	simIcon: "fa fa-file",
	mouIconOpen: "fa fa-play fa-rotate-90",
	mouIconClose:"fa fa-play"
});