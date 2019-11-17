
//横向移动的动画   参数：元素、目标位置
function animate(element,target){
    //通过判断保证页面上只有一个定时器在执行动画
    if(element.timerId){
        clearInterval(element.timerId);
        element.timerId = null;
    }
    element.timerId = setInterval(function(){
        let step = 10;//步进
        let current = element.offsetLeft;//盒子当前的位置
        //如果当前位置大于目标位置 step要为负数
        if(current > target){
            step = - Math.abs(step);
        }
        //控制运动停止
        if(Math.abs(current - target) < Math.abs(step)){
            //让定时器停止
            clearInterval(element.timerId);
            //让盒子固定在target位置
            element.style.left = target + 'px';
            return 0;
        }
        element.style.left = element.offsetLeft + step + 'px';
    },8)
}