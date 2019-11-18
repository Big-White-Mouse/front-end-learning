//用循环生成十个方块

//获取容器
let container = document.getElementById('container');
let array = [];
for(let i = 0;i < 10;i++){

    let box = new Box(container);
    //把创建好的方块添加到数组中
    array.push(box);
}
//设置随机位置，开启定时器
setInterval(randomBox,500);
//解决刚打开浏览器时定时器未启动导致所有的盒子都堆在左上角
//所以先调用一遍随机生成坐标的函数；
randomBox();
function randomBox(){
    //随机生成方块的坐标
    for(let i=0;i<array.length;i++){
        let box = array[i];
        box.random();
    }
}
