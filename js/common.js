/**
 * Created by HUCC on 2016/11/5.
 */
/**
 *
 * @param element
 * @returns {*}
 */
//能力检测；you can you up
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        //能力检测：检测浏览器有没有这个能力。
        //说明支持innerText这个属性
        return element.innerText;
    } else {
        //不支持innerText属性，说明是低版本的火狐浏览器，用textContent
        return element.textContent;
    }
}

function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

function getNextElement(element) {
    //能力检测
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //只能先获取下一个兄弟节点
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;//继续往后查找
        }
        //node null  node是一个元素
        return node;
    }
}
/**
 *
 * @param element
 * @returns {*}
 */
function getPriviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        //不支持
        var node = element.previousSibling;//节点
        while (node && node.nodeType != 1) {
            //往前找
            node = node.previousSibling;
        }

        return node;
    }
}
function getFirstChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        //找第一个节点
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;//往后找
        }
        return node;
    }
}
function getLastChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}


//获取页面被卷去的高度和宽度
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


//获取页面可视区域的宽度和高度
function client() {
    return {
        "width":window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        "height":window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}
function getMin(arr) {
    var minIndex = 0;
    var minValue = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
            minIndex = i;
        }
    }

    return {
        index: minIndex,
        value: minValue
    }
}