function Box(parent,options)//当对象的属性中的参数特别多的时候我们通过另一个对象传递所有的参数
{
    //防止调用函数的时候不传参数发生错误 如果没有传入参数就给对象一个默认值
    options = options || {};
    //对象的属性：
    this.backgroundColor = options.backgroundColor || 'red';
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
    //创建对应的div
    this.div = document.createElement('div');
    parent.appendChild(this.div);
    this.parent = parent;
    this.init();
}
//设置div样式
Box.prototype.init = function(){
    let div = this.div;
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = 'absolute';
};

//随机生成方块的位置和颜色
Box.prototype.random = function(){
    //总共能放多少个方块 = 父容器的宽度/方块的宽度
    //0 < 前面能放几个方块 < 总共能放几个方块
    //方块的坐标 = 随机生成前面能放几个方块 * 方块的宽度
    let x = Tools.getRandom(0,this.parent.offsetWidth / this.width - 1) * this.width;
    let y = Tools.getRandom(0,this.parent.offsetHeight / this.height - 1) * this.height;
    //颜色
    let r = Tools.getRandom(0,255);
    let g = Tools.getRandom(0,255);
    let b = Tools.getRandom(0,255);

    this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';
    this.div.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
};