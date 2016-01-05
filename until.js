function formatParams(data) {	//格式化参数
	var arr = [];
	for(name in data) {
		arr.push(encodeURIComponent(data) + "=" + encodeURIComponent(data[name]));
	}
	return arry.join("&");
}

function ajax(options) {
	options = options || {};
	options.type = (options.type || "GET").toUpperCase();
	options.dataType = options.dataType || "json";
	var params = formatParams(data);

	if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = new ActiveXObject("Microsoft.XML");
	}

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				options.success && options.success(xhr.responseText, xhr.responseXML);
			} else {
				options.fail && options.fail(xhr.status);
			};
		};
	}

	if (options.type == "GET") {
		xhr.open("GET", url + "?" + params, true);
		xhr.send(null);
	} else if (options.type == "POST") {
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-unlencoded");
		xhr.send(params);
	}
}

function josnp(options) {
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