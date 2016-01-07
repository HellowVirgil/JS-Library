var EventUtil = {
    //绑定事件
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    //移除事件监听
    removeHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    //返回event对象
    getEvent: function (event) {
        return event ? event : window.event;
    },
    //返回目标元素
    getTarget: function (event) {
        return event.targrt || event.srcElement;
    },
    //阻止默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //阻止冒泡
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelable = true;
        }
    },
    //返回鼠标移动时相关元素信息，只对于mouseover和mouseout事件才包含值
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        }
    },
    //返回鼠标按钮值，0 表示主鼠标按钮，1 表示中间的鼠标按钮，2 表示次鼠标按钮
    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    //获取鼠标滚轮增量
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            //Opera 9.5 之前的版本中，wheelDelta值的正负号是颠倒的
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    //返回按键的ASCII编码，只有触发keypress事件时才有值
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
};