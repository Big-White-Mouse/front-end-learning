function my$(id) {
  return document.getElementById(id);
}

// 处理浏览器兼容性
// 获取第一个子元素
function getFirstElementChild(element) {
    var node, nodes = element.childNodes, i = 0;
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

// 处理浏览器兼容性
// 获取下一个兄弟元素
 function getNextElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
      if (el.nodeType === 1) {
          return el;
      }
    }
    return null;
  }


// 处理innerText和textContent的兼容性问题
// 设置标签之间的内容
function setInnerText(element, content) {
  // 判断当前浏览器是否支持 innerText
  if (typeof element.innerText === 'string') {
    element.innerText = content;
  } else {
    element.textContent = content;
  }
}


//处理注册事件的兼容性问题
//eventName 不带on  例如 click mouseover mouseout
function addEventListener(element,eventName,fn){
  //判断当前浏览器是否支持addEventListener
  if(element.addEventListener){
    element.addEventListener(eventName,fn);
    //第三个参数默认是false
  } else if (element.attachEvent){
    element.attachEvent('on'+eventName,fn);
  } else {//一些更古老的浏览器可能两种方式都不支持
    element['on'+eventName] = fn;
  }
}


//处理移除事件的兼容性问题
//eventName 不带on  例如 click mouseover mouseout
function removeEventListener(element,eventName,fn){
  //判断当前浏览器是否支持addEventListener
  if(element.removeEventListener){
    element.removeEventListener(eventName,fn);
    //第三个参数默认是false
  } else if (element.detachEvent){
    element.detachEvent('on'+eventName,fn);
  } else {//一些更古老的浏览器可能两种方式都不支持
    element['on'+eventName] = null;
  }
}


