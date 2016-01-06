## JS-Library
一个简单的JS库

###DOM.js——dom相关方法的封装

> insertAfter 在某个元素前插入新元素

insertAfter(newElement, targetElement) 第一个参数为要插入的新元素节点，第二个参数为要插入处的元素节点

> DragDrop 对象是一个使用了模块模式的单例,使元素可拖拽

使用方法为：
DragDrop.addHandler("dragstart", function () {
    var status = document.getElementById("status");
    status.innerHTML = "Started dragging " + event.target.id;
});
DragDrop.addHandler("drag", function () {
    var status = document.getElementById("status");
    status.innerHTML = "Dragged " + event.target.id + " to (" + event.x + ", " + event.y + ")";
});
DragDrop.addHandler("dragend", function () {
    var status = document.getElementById("status");
    status.innerHTML = "Dropped " + event.target.id + " st (" + event.x + ", " + event.y + ")";
});

> ready 判断文档是否加载完成

ready(fn) 参数为文档加载完成时的回调函数

###Util.js——工具类方法的封装

> ajax使用方法

var options = {
 	url: "http:www.baidu.com",
	type: "GET",
	data: {

	},
	dataType: "json",
	success: function() {

	},
	fail: function() {

	}
}
ajax(options);

> jsonp使用方法

options = {
	url: "http:www.baidu.com",
	data: {

	},
	success: function() {

	},
	callback: ""
}
jsonp(options);

###EventUtil.js——事件处理方法的工具类
