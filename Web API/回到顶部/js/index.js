let htop = my$('top');
let totop = my$('totop');
window.onscroll = function(){
  //1.当拖动滚动条的时候，当内容滚动出去10px 改变header 的高度，并显示回到顶部的按钮
    //获取滚动距离
    //调用common.js中的函数
    let scrollTop = getScroll().scrollTop;
    if(scrollTop > 10){
        //改变高度
        htop.className = 'header fixed';
        //显示回顶按钮
        totop.style.display = 'block';
    } else {
        htop.className = 'header';
        totop.style.display = 'none';
    }
};

  //2.当点击回到顶部按钮的时候，用动画的方式回到最上面，让滚动的距离为0
let timerId = null;
totop.onclick = function(){
    if(timerId){
        clearInterval(timerId);
        timerId = null;
    }
    timerId = setInterval(function(){
        let step = -10;//步进
        let target = 0;//目标位置 顶部
        let current = getScroll().scrollTop;//获取当前位置
        if(current > target){
            if(Math.abs(current - target) <= Math.abs(step)){
                clearInterval(timerId);
                document.body.scrollTop = target;
                document.documentElement.scrollTop = target;
                return 0;
            }
            current += step;
            document.body.scrollTop = current;
            document.documentElement.scrollTop = current;
        }
    },3)
};