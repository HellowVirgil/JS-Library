## JS-Library
一个简单的JS库

### DOM.js——dom相关方法的封装

* insertAfter(newElement, targetElement) 在某个元素前插入新元素，newElement 为要插入的新元素节点，targrtElement 为要插入处的元素节点

使用方法为：
```javascript
var div = document.getElementById("myDiv");
var newDiv = document.createElement("<div class="newDiv"></div>");
insertAfter(newDiv, div);
```

* DragDrop 对象是一个使用了模块模式的单例，使元素可拖拽，自定义了drag、dragstart、dragend事件

使用方法为：
```javascript
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
```      

* ready(fn) 判断文档是否加载完成，参数为文档加载完成时的回调函数

使用方法：
```javascript
ready(function () {
    //do something
});
```

### Util.js——工具类方法的封装

* ajax(options) ajax请求函数

使用方法：
```javascript
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
```

* jsonp(options) jsonp请求函数

使用方法：
```javascript
options = {
	url: "http:www.baidu.com",
	data: {
	},
	success: function() {
	},
	callback: ""
}
jsonp(options);
```

* throttle(method, context) 函数节流，使某个函数一定时间内只能调用一次，method 为待处理函数，context 为上下文环境

使用方法：
```javascript
function resizeDiv () {
    var div = document.getElementById("myDiv");
    div.style.height = div.offsetWidth + "px";
}
window.onresize = function () {
    throttle(resizeDiv);
}
```

* chunk(arry, process, context) 数组分块(定时器时间间隔设置为100ms)，将长数组分为小段处理，arry 为待分块数组，process 为处理函数，context 为上下文环境

使用方法：
```javascript
var data = [];
function printValue (item) {
    var div = document.getElementById("myDiv");
    div.innerHTML += item + "<br>";
}
chunk(data, printValue);
```

* curry(fn) 函数柯里化，将函数的某个参数变为实参

使用方法：
```javascript
function add (num1, num2) {
    return num1 + num2;
}
var curriedAdd = curry(add, 5);
alert(curriedAdd(3));   //8
```

* bind(fn, context) 返回一个在给定环境中调用给定函数的函数，fn 为一个函数，context 为上下文环境

使用方法：
```javascipt
var handler = {
    message: "Event handled",
    handleClick: function (event) {
        alert(this.message + ":" + ebent.type);
    }
};
var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));
```

### EventUtil.js——EventUtil对象是事件处理方法的集合

* addHandler(element, type, handler) 为元素添加事件监听

使用方法：
```javascript
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function (e) {
    //do something
});
```

* removeHandler(element, type, handler) 移除事件监听

使用方法：
```javascript
EventUtil.removeHandler(div, "click", function (e) {
    //do something
});
```

* getEvent(event) 返回事件对象

使用方法：
```javascript
EventUtil.addHandler(div, "click", function (e) {
    var event = EventUtil.getEvent(e);
});
```

* getTarget(event) 返回目标元素

使用方法：
```javascript
EventUtil.addHandler(div, "click", function (e) {
    var event = EventUtil.getEvent(e);
    var target = EventUtil.getTarget(event);
});
```

* preventDefault(event) 阻止默认行为

使用方法：
```javascript
EventUtil.addHandler(div, "click", function (e) {
    var event = EventUtil.getEvent(e);
    EventUtil.preventDefault(event);
});
```

* stopPropagation(event) 阻止冒泡

使用方法：
```javascript
EventUtil.addHandler(div, "click", function (e) {
    var event = EventUtil.getEvent(e);
    EventUtil.stopPropagation(event);
});
```

* getRelatedTarget(event) 返回鼠标移动时相关元素信息，只对于mouseover和mouseout事件才包含值

* getButton(event) 返回鼠标按钮值，0 表示主鼠标按钮，1 表示中间的鼠标按钮，2 表示次鼠标按钮

* getWheelDelta(event) 获取鼠标滚轮增量

* getCharCode(event) 返回按键的ASCII编码，只有触发keypress事件时才有值

### EventTarget.js——自定义事件类

* addHandler

* fire

* removeHandler

### Cookie.js——Cookie处理相关函数封装
