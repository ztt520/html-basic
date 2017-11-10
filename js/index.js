/**
 * Created by Administrator on 2017/9/16.
 */

    //姜程伟的js
//获取元素
var mid = document.getElementById("mid");
var outer = document.getElementById("outer");
var box = document.getElementById("box");//大盒子
var screenBox = box.children[0];//可视区域
var imgWid = screenBox.offsetWidth;//图片的宽度
var ul = screenBox.children[0];//要运动ul
var lisUl = ul.children;//所有的图片li
var ol = outer.children[1];//操作的图片位置
var lisOl = ol.children;//操作的下面的相当于小方块
var arrBox = outer.children[2];//左右箭头的父盒子
var arrLeft = arrBox.children[0];//左箭头
var arrRight = arrBox.children[1];//右箭头


var arr1 = ["0 -100px", "-190px -100px", "-380px -100px", "-570px -100px", "-760px -100px"];//hong
var arr = ["0 0", "-190px 0", "-380px 0", "-570px 0", "-760px 0"]//bai

for (var i = 0; i < lisOl.length; i++) {
    lisOl[i].index = i;
    lisOl[i].onclick = function () {
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].style.background = "url(images/nav.png) no-repeat " + arr[i];
        }
        if (i == 2) {
            return;
        } else {
            this.style.background = "url(images/nav.png) no-repeat " + arr1[this.index]
        }
        animate(ul, -this.index * imgWid)
    }
}
var count = 0;
ul.appendChild(lisUl[0].cloneNode(true));
arrRight.onclick = function () {
    if (count == lisUl.length - 1) {
        ul.style.left = 0 + "px";
        count = 0;
    }
    count++;
    animate(ul, -count * imgWid);
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].index = i
        lisOl[i].style.background = "url(images/nav.png) no-repeat " + arr[i];
    }
    if (count == lisUl.length - 1) {
        lisOl[0].style.background = "url(images/nav.png) no-repeat " + arr1[0]
    } else {
        lisOl[count].style.background = "url(images/nav.png) no-repeat " + arr1[count]
    }
}

arrLeft.onclick = function () {
    if (count == 0) {
        ul.style.left = -(lisUl.length - 1) * imgWid + "px";
        count = lisUl.length - 1;
    }
    count--;
    animate(ul, -count * imgWid);
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].style.background = "url(images/nav.png) no-repeat " + arr[i]
    }
    lisOl[count].style.background = "url(images/nav.png) no-repeat " + arr1[count]

}

var timer = null;
//用于直接触发标签的点击事件，不能采用函数体的形式
timer = setInterval(function () {
    arrRight.click();
}, 2000)
ol.onclick=function() {
    clearInterval(timer);
}
//  ol.onmouseout = function () {
//      timer = setInterval(function () {
//          arrRight.click();
//      }, 2000)
//  }
arrLeft.onmouseover = function () {
    clearInterval(timer);
}
arrLeft.onmouseout = function () {
    timer = setInterval(function () {
        arrRight.click();
    }, 2000)
}
arrRight.onmouseover = function () {
    clearInterval(timer);
}
arrRight.onmouseout = function () {
    timer = setInterval(function () {
        arrRight.click();
    }, 2000)
}

function animate(element, target) {
    clearInterval(element.timer);//清除旧的定时器，保证匀速运动，防止加速效果
    element.timer = setInterval(function () {
        //1 获取元素当前位置 使用offsetLeft属性
        var current = element.offsetLeft;
        //2 设置步长
        var step = 17;
        //根据当前位置和目标位置的大小关系进行判断
        step = target > current ? step : -step;
        //5 运动条件设置
        //检测当前位置和目标位置之间的距离，如果满足一个step的距离，可以运动，否则直接运动到目标位置，结束
        if (Math.abs(target - current) > Math.abs(step)) {
            //3 设置运动公式:元素位置(新) = 元素位置(旧) + 步长;
            current = current + step;
            //4 设置给元素的left值运动
            element.style.left = current + "px";
        } else {
            //6 让element直接运动到目标位置，再清除定时器
            element.style.left = target + "px";
            clearInterval(element.timer);
        }
    }, 20);
}

//邹婷婷js
var fu=document.getElementById("fu");//福的大盒子
var list=fu.children[0];//福的ul
var fuLis=list.children;//li列表
var fu1=["1px 0px","-318px 0px","-650px 0px","-1004px 0px","-1340px 0px","-1677px 0px"];//存放精灵图的位置
var fu2=["0px -340px","-333px -340px","-659px -340px","-1007px -340px","-1365px -340px","-1690px -340px"];//onmouseover 精灵图位置
for (var i = 0; i <fuLis.length; i++) {
    fuLis[i].index = i;
    fuLis[i].style.background = "url(images/fu.gif) no-repeat " + fu1[i];
    //给li设置鼠标移入事件
}
for (var i = 0; i <fuLis.length; i++) {
    fuLis[i].onmouseover=function(){
        for (var i = 0; i<fuLis.length; i++) {
            fuLis[i].style.background = "url(images/fu.gif) no-repeat " + fu1[i];
        }
        this.style.background = "url(images/fu.gif) no-repeat " + fu2[this.index];
        this.style.cursor="pointer";
    }
}
list.onmouseout= function () {
    for (var i = 0; i <fuLis.length; i++) {
        fuLis[i].style.background = "url(images/fu.gif) no-repeat " + fu1[i];
    }

};



//胡海龙的js

$(".UL li").bind("mouseenter",function(){
    $(".UL .on").removeClass("on");
    $(this).addClass("on");
})

//娇娇的js
//(function($){
//    $(window).load(function(){
//
//        var loopDuration=6000;
//
//        $("#content-1").mThumbnailScroller({
//            callbacks:{
//                onInit:function(){
//                    $("#content-1").mThumbnailScroller("scrollTo","right",{duration:loopDuration/2,easing:"easeInOutSmooth"});
//                },
//                onTotalScroll:function(){
//                    if($(this).data("mTS").trigger==="external"){
//                        $("#content-1").mThumbnailScroller("scrollTo","left",{duration:loopDuration/2,easing:"easeInOutSmooth"});
//                    }
//                }
//            }
//        });
//
//    });
//})(jQuery);

//视频的播放部分JS
//var obtn = document.getElementById('video');
//var ovideo = document.getElementById('video-btn');
//var oatn = document.getElementById('video-area');
//var oshut = document.getElementById('video-shut');
//var oshadow = document.getElementById('shadow');
//obtn.onclick = function () {
//    ovideo.style.display = 'block';
//    oshadow.style.display = 'block';
//    oatn.innerHTML = '<embed src="http://www.tudou.com/v/Bs_lZPxcoRs/&rpid=818231113&autoPlay=true&resourceId=818231113_04_05_99/v.swf" allowFullScreen="true" quality="high" width="500" height="300" align="middle" allowScriptAccess="always" flashvars ="isAutoPlay=true" type="application/x-shockwave-flash"></embed>';
//}
//oshut.onclick = function () {
//    ovideo.style.display = 'none';
//    oshadow.style.display = 'none';
//}





