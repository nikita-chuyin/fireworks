//给页面添加点击事件
document.onclick = function(eve){
    var e = e || window.event;
    var arr = [];
    //获取鼠标点击位置
    var x = e.clientX;
    var y = e.clientY;
    //设置步长
    var speed = 20;
    //生成大烟花，设置他的css样式，出发点是可视区页面的下方
    var fire = document.createElement('div');
    fire.className = 'fire';
    fire.style.background = randomColor();
    fire.style.left = x + 'px';
    fire.style.top = document.documentElement.clientHeight+'px';
    //将烟花加到页面上
    document.body.appendChild(fire);
    //生成计时器
    var t = setInterval(function(){
        if(fire.offsetTop <= y){
            clearInterval(t);
            document.body.removeChild(fire);
            //执行show函数，生成小烟花
            show();
        }
        fire.style.top = fire.offsetTop - speed + 'px';
    },30);
function show(){
    //利用循环，生成50个小烟花，设置样式
    for(var i = 0; i < 50; i++){
        var sFire = document.createElement('div');
        sFire.style.left = x + 'px';
        sFire.style.top = y + 'px';
        sFire.style.color = randomColor();
        sFire.innerHTML = '❤';
        sFire.style.position = 'absolute';
        //生成随机数
        var a = Math.random()*360;
        sFire.sx = Math.sin(a*180/Math.PI)*20*Math.random();
        sFire.sy = Math.cos(a*180/Math.PI)*20*Math.random();
        //把小烟花追加到页面上
        document.body.appendChild(sFire);
        //将生成的烟花信息追加到数组中。
        arr.push(sFire);
    }
}
//设置定时器让小烟花实现自由落体运动
setInterval(function move(){
    //利用循环一直改变烟花的位置
    for(var i = 0; i < arr.length; i++){
        //设置第i个小烟花的运动范围
        arr[i].style.left = arr[i].offsetLeft + arr[i].sx + 'px';
        arr[i].style.top = arr[i].offsetTop + arr[i].sy + 'px';
        //让烟花垂直方向每次都加1，实现下落效果
        arr[i].sy += 1;
        //判断烟花是否运动出屏幕可视区，如果是，就将它删除，
        if(arr[i].offsetLeft < 0 || arr[i].offsetLeft > document.documentElement.clientWidth || arr[i].offsetTop < 0|| arr[i].offsetTop > document.documentElement.clientWidth){
            document.body.removeChild(arr[i]);
        }
    }
},30);
let derve = document.getElementById('derve');
let i = 0,
timer = 0,
str = '花间一壶酒，独酌无相亲。举杯邀明月，对影成三人。月既不解饮，影徒随我身。暂伴月将影，行乐须及春。我歌月徘徊，我舞影零乱。醒时同交欢 ，醉后各分散。永结无情游，相期邈云汉。';
setInterval(function typing(){
    if(i <= str.length){
        derve.innerHTML = str.slice(0,i++);
        timer = setTimeout('typing()',200);
    }else{
        setInterval(function remo(){
            derve.innerHTML = '';
        },2000);
        clearTimeout(timer);
    }
},200);
}
function random(max,min){
    return Math.round(Math.random()*(max - min) + min);
}
function randomColor(){
    return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")";
}
