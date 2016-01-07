//格式化参数
function formatParams (data) {
	var arr = [];
	for(name in data) {
		arr.push(encodeURIComponent(data) + "=" + encodeURIComponent(data[name]));
	}
	return arry.join("&");
}

//创建XMLHttpRequest对象
function createXHR () {
    if (typeof XMLHttpRequest != "undefined") {
        //惰性载入函数
        return function () {
            return new XMLHttpRequest();
        }
    } else if (typeof ActiveXObject != "undefined") {
        return function() {
            if (typeof arguments.callee.activeXString != "String") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;

                for (i = 0,len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {

                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    } else {
        return function () {
            throw new Error("NO XHR object available.");
        }
    }
}

//ajax方法
function ajax (options) {
	options = options || {};
	options.type = (options.type || "GET").toUpperCase();
	options.dataType = options.dataType || "json";
	var params = formatParams(data);

	var xhr = createXHR();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				options.success && options.success(xhr.responseText, xhr.responseXML);
			} else {
				options.fail && options.fail(xhr.status);
			}
		}
	};

	if (options.type == "GET") {
		xhr.open("GET", url + "?" + params, true);
		xhr.send(null);
	} else if (options.type == "POST") {
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-unlencoded");
		xhr.send(params);
	}
}

//jsonp方法
function josnp (options) {
	options = options || {};
	if (!options.url || !options.callback) {
		throw new Error("参数不合法");
	}

	var callbackName = "jsonp_" + (new Date()).valueOf();
	var oHead = document.getElementsByTagName('head')[0];
	options.data[options.callback] = callbackName;
	var params = formatParams(options.data); 
	var oScript = document.createElement('script');
	oHead.appendChild(oScript);

	window[callbackName] = function(json) {
		oHead.removeChild(oScript);
		window[callbackName] = null;
		options.success && options.success(json);
	};

	oScript.src = options.url + "?" + params;
}

//函数节流
function throttle (method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    });
}

//数组分块
function chunk (arry, process, context) {
    setTimeout(function () {
        var item = arry.shift();
        process.call(context, item);

        if (arry.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    });
}

//函数柯里化
function curry (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    }
}

//函数运行时环境绑定
function bind (fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    }
}