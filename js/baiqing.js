/**
 * Created by ztt on 2017/9/17.
 */

//��ҳ���ֲ�ͼ��js
//1 ��ȡԪ��
var box = document.getElementById("box");
var screenBox = box.children[0];//��������
var imgHeight = screenBox.offsetHeight;//ͼƬ��ʵ�ʿ��
var ul = screenBox.children[0];//Ҫ�˶���ul
var lisUl = ul.children;//���е�ͼƬli
var ol = screenBox.children[1];//����ԲȦ��λ��
var lisOl = ol.children;//Ҫ������СԲȦ ��̬���
var count = 0;
//2 ��̬����ԲȦ
var li;
for (var i = 0; i < lisUl.length; i++) {
    li = document.createElement("li");
    //��ʾ����
//        li.innerText=i+1;
    ol.appendChild(li);
}

//����һ��С��������Ĭ����ɫ
lisOl[0].className = "current";

//���ֲ�ͼЧ��
for (var i = 0; i < lisOl.length; i++) {
    lisOl[i].index = i;
    lisOl[i].onclick = function () {
        if (count == lisUl.length - 1) {
            ul.style.top = 0 + "px";
        }
        //�����ť��ɫ
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }
        this.className = "current";
        animate(ul, -this.index * imgHeight);
//            count=this.index;
    }
}

//    ul.appendChild(lisUl[0].cloneNode(true));

//animate�˶�ʵ��
function animate(element, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        //��ȡԪ�ص�ǰλ�ã�ʹ��offsetTop
        var current = element.offsetTop;
        //���ò���
        step = 20;
        step = target > current ? step : -step;
        //5 �˶���������
        //��⵱ǰλ�ú�Ŀ��λ��֮��ľ��룬�������һ��step�ľ��룬�����˶�������ֱ���˶���Ŀ��λ�ã�����
        if (Math.abs(target - current) > Math.abs(step)) {
            //3 �����˶���ʽ:Ԫ��λ��(��) = Ԫ��λ��(��) + ����;
            current = current + step;
            //4 ���ø�Ԫ�ص�leftֵ�˶�
            element.style.top = current + "px";
        } else {
            //6 ��elementֱ���˶���Ŀ��λ�ã��������ʱ��
            element.style.top = target + "px";
            clearInterval(element.timer);
        }
    }, 20);
}
/*-------------------------------------------------------------*/
//$(function () {
//    $("li").show(3000);
//})


