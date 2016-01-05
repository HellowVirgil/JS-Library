function insertAfter(newElement, targetElement) {
	var parentNode = targetElement.parentNode;

	if(parentNode.lastChild = targetElement) {
		parentNode.appendChild(newElement);
	} else {
		parentNode.insertBefore(newElement, targetElement.nextSibling);
	}
}

function ready(readFn) {
	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", function() {
			readyFn && readyFn();
		});
	} else {
		var bReady = false;

		document.attachEvent('onreadystatechange', function() {
			if (bReady) {
				return ;
			}
			if (document.readyState == "complete" || document.readyState == "interactive") {
				bReady = true;
				readyFn && readyFn();
			}
		});

		function checkDoScroll() {
			try {
				document.documentElement.doScroll("left");
				if (bReady) {
					return ;
				}
				bReady = true;
				ready && readyFn();
			} catch(e) {
				setTimeout(checkDoScroll, 1);
			}
		}
	}
}

function drag(element) {
	var distX=0;
	var distY=0;

	element.addEventListener("mousedown", function down(ev) {
		var oEvent = ev || event;
		distX = oEvent.clientX - element.offsetLeft; //获取边界到鼠标的距离
		distY = oEvent.clientY - element.offsetTop;

		document.addEventListener("mousemove", function move(ev){
			var oEvent = ev || event;
			var x = oEvent.clientX - distX;
			var y = oEvent.clientY - distY;
			if (x < 0) {
				x = 0;
			}
			if (y < 0) {
				y = 0;
			}
			if (x > (document.documentElement.clientWidth - oDiv.offsetWidth)) {
				x = document.documentElement.clientWidth - oDiv.offsetWidth;
			}
			element.style.left = x + "px"; //根据鼠标位置相对定位，得到left，top值
			element.style.top = y + "px";
		});

		document.addEventListener("mouseup", function up() {
			document.removeEventListener("mousemove", move);
			document.removeEventListener("mouseup", up);
		});
	});
}
