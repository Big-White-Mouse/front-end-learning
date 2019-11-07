//获取元素 使用方法：my$('id');
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


//获取页面滚动距离兼容性问题解决
function getScroll(){
  var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  return {
    scrollTop: scrollTop,
    scrollLeft: scrollLeft
  }
}


//通过页面滚动来处理pageX的兼容性问题
//使用时注意传递参数
//例如：
  // document.onclick = function(e){
  //   e = e || window.event;
  //   console.log(getPage(e).pageX);
  //   console.log(getPage(e).pageY);
  // }
function getPage(e){
  var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
  var pageY = e.pageY || e.clientY + getScroll().scrollTop;
  return {
    pageX: pageX,
    pageY: pageY
  }
}