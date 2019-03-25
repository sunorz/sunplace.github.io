(function($) {
			var Tree = function(element, options) {
				this.element = element;
				//json数组
				this.JSONArr = options.arr;
				//单个文件图标
				this.simIcon = options.simIcon || "";
				//多个文件打开图标
				this.mouIconOpen = options.mouIconOpen || "fa fa-folder-open-o";
				//多个文件关闭图标
				this.mouIconClose = options.mouIconClose || "fa fa-folder-o";
				//回调函数
				this.callback = options.callback || function() {};
				//初始化
				this.init();

			}
			//初始化事件
			Tree.prototype.init = function() {
				//事件
				this.JSONTreeArr = this.proJSON(this.JSONArr, 0);
				this.treeHTML = this.proHTML(this.JSONTreeArr);
				this.element.append(this.treeHTML);
				this.bindEvent();
			}
			//生成树形JSON数据
			Tree.prototype.proJSON = function(oldArr, pid) {
				var newArr = [];
				var self = this;
				oldArr.map(function(item) {
					if(item.pid == pid) {
						var obj = {
							id: item.id,
							name: item.name
						}
						var child = self.proJSON(oldArr, item.id);
						if(child.length > 0) {
							obj.child = child
						}
						newArr.push(obj)
					}

				})
				return newArr;

			};
			//生成树形HTML
			Tree.prototype.proHTML = function(arr) {
				var ulHtml = "<ul class='menuUl'>";
				var self = this;
				arr.map(function(item) {
					var lihtml = "<li>";
					if(item.child && item.child.length > 0) {
						lihtml += "<i ischek='true' class='" + self.mouIconOpen + "' style='font-size:10%;color:#6e6e6e;cursor: pointer;'></i>" +
							"<span id='" + item.id + "'><i class='fa fa-folder' style='font-size:130%;color:#7fb9f2;'></i>" + item.name + "</span>"
						var _ul = self.proHTML(item.child);
						lihtml += _ul + "</li>";
					} 
					//当文件夹下有内容却不想一一列出时&文件夹为空时
					else if(item.name.indexOf("*")>-1){
						var fname=item.name.substr(1);
							lihtml += "<span id='" + item.id + "'><i class='fa fa-folder' style='font-size:130%;color:#7fb9f2;'></i>" + fname + "</span>"
							lihtml +="</li>";
							
							}
					
					else {
						lihtml += "<i class='" + self.simIcon + "' style='color:#959595;'></i>" +
							"<span id='" + item.id + "'>" + item.name + "</span>";
					}
					ulHtml += lihtml;
				})
				ulHtml += "</ul>";
				return ulHtml;
			}
			Tree.prototype.bindEvent = function() {
				var self = this;
				this.element.find(".menuUl li i").click(function() {
					var ischek = $(this).attr("ischek");
					if(ischek == 'true') {
						var menuUl = $(this).closest("li").children(".menuUl");
						$(this).removeClass(self.mouIconOpen).addClass(self.mouIconClose)
						menuUl.hide();
						$(this).attr("ischek", 'false');
					} else if(ischek == 'false') {
						var menuUl = $(this).closest("li").children(".menuUl");
						menuUl.show();
						$(this).removeClass(self.mouIconClose).addClass(self.mouIconOpen)
						$(this).attr("ischek", 'true')
					}
				});

				this.element.find(".menuUl li span").click(function() {
					return false;
				})
			}
			//给jquery对象拓展一个树形对象
			$.fn.extend({
				ProTree: function(options) {
					return new Tree($(this), options)
				}
			})
		})(jQuery);