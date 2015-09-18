function insertAfter(newElement, targetElement) {
	var parentNode = targetElement.parentNode;

	if(parentNode.lastChild = targetElement) {
		parentNode.appendChild(newElement);
	} else {
		parentNode.insertBefore(newElement, targetElement.nextSibling);
	}
}
