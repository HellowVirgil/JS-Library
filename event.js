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
		 	oDiv.style.left = x + "px"; //根据鼠标位置相对定位，得到left，top值 
		 	oDiv.style.top = y + "px"; 
		});

		document.addEventListener("mouseup", function up() { 
			document.removeEventListener("mousemove", move); 
			document.removeEventListener("mouseup", up); 
		});
	});
}