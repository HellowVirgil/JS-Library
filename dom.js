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
		};
	}
};
