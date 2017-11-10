/**
 * Created by ztt on 2017/9/17.
 */

//大页面轮播图的js
//1 获取元素
var box = document.getElementById("box");
var screenBox = box.children[0];//可视区域
var imgHeight = screenBox.offsetHeight;//图片的实际宽度
var ul = screenBox.children[0];//要运动的ul
var lisUl = ul.children;//所有的图片li
var ol = screenBox.children[1];//放置圆圈的位置
var lisOl = ol.children;//要操作的小圆圈 动态添加
var count = 0;
//2 动态创建圆圈
var li;
for (var i = 0; i < lisUl.length; i++) {
    li = document.createElement("li");
    //显示数字
//        li.innerText=i+1;
    ol.appendChild(li);
}

//给第一个小盒子设置默认颜色
lisOl[0].className = "current";

//简单轮播图效果
for (var i = 0; i < lisOl.length; i++) {
    lisOl[i].index = i;
    lisOl[i].onclick = function () {
        if (count == lisUl.length - 1) {
            ul.style.top = 0 + "px";
        }
        //点击按钮变色
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }
        this.className = "current";
        animate(ul, -this.index * imgHeight);
//            count=this.index;
    }
}

//    ul.appendChild(lisUl[0].cloneNode(true));

//animate运动实现
function animate(element, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        //获取元素当前位置，使用offsetTop
        var current = element.offsetTop;
        //设置步长
        step = 20;
        step = target > current ? step : -step;
        //5 运动条件设置
        //检测当前位置和目标位置之间的距离，如果满足一个step的距离，可以运动，否则直接运动到目标位置，结束
        if (Math.abs(target - current) > Math.abs(step)) {
            //3 设置运动公式:元素位置(新) = 元素位置(旧) + 步长;
            current = current + step;
            //4 设置给元素的left值运动
            element.style.top = current + "px";
        } else {
            //6 让element直接运动到目标位置，再清除定时器
            element.style.top = target + "px";
            clearInterval(element.timer);
        }
    }, 20);
}
/*-------------------------------------------------------------*/
//$(function () {
//    $("li").show(3000);
//})


