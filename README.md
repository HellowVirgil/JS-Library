## JS-Library
一个简单的JS库

###dom.js     dom相关方法的封装，其中包括insertAfter、drag和ready方法的实现

* insertAfter 在某个元素前插入新元素

> insertAfter(newElement, targetElement) 第一个参数为要插入的新元素节点，第二个参数为要插入处的元素节点

* drag 使某个元素变为可拖拽

> drag(element) 参数为目标元素

* ready 判断文档是否加载完成

> ready(fn) 参数为文档加载完成时的回调函数

###until.js   工具类方法的封装,其中包括ajax和jsonp方法的实现

* ajax使用方法

> var options = {
> 	url: "http:www.baidu.com",
>	type: "GET",
>	data: {
>
>	},
>	dataType: "json",
>	success: function() {
>
>	},
>	fail: function() {
>
>	}
> }
> ajax(options);

* jsonp使用方法

> options = {
>	url: "http:www.baidu.com",
>	data: {
>
>	},
>	success: function() {
>
>	},
>	callback: ""
> }
> jsonp(options);

###promise.js  原生promise对象的实现
