var EventUtil = {
    //���¼�
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    //�Ƴ��¼�����
    removeHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    //����event����
    getEvent: function (event) {
        return event ? event : window.event;
    },
    //����Ŀ��Ԫ��
    getTarget: function (event) {
        return event.targrt || event.srcElement;
    },
    //��ֹĬ����Ϊ
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //��ֹð��
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelable = true;
        }
    },
    //��������ƶ�ʱ���Ԫ����Ϣ��ֻ����mouseover��mouseout�¼��Ű���ֵ
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        }
    },
    //������갴ťֵ��0 ��ʾ����갴ť��1 ��ʾ�м����갴ť��2 ��ʾ����갴ť
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
    //��ȡ����������
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            //Opera 9.5 ֮ǰ�İ汾�У�wheelDeltaֵ���������ǵߵ���
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    //���ذ�����ASCII���룬ֻ�д���keypress�¼�ʱ����ֵ
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
};