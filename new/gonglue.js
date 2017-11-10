/**
 * Created by Administrator on 2017/9/17.
 */
$(document).ready(function () {

    $(".glmessage").mouseenter(function () {
        $(".message").slideDown(800)
    })
    $(".messageright>.msrightin>ul>li").mouseenter(function () {
        $(this).shake(4, 5, 800)
    })
    $(".leftin>ul a").mouseenter(function () {
        $(this).animate({
            fontSize: 16,
        }, 600)
    })
    $(".leftin>p").mouseenter(function () {
        $(".leftin>ul").fadeIn(1000)
    })
    $(".leftin>ul a").mouseenter(function () {
        $(this).css("color", "gold")
    })
    $(".leftin>ul a").mouseleave(function () {
        $(this).css("color", "#fff")
    })
    $(".systeminright>dl").mouseenter(function () {
        $(this).css({
            backgroundColor: "#f3f5f9",
            cursor: "pointer"
        }).siblings().css({
            backgroundColor: "",
        }).end().children("dt").css({
            backgroundColor: "#5184c8",
        }).parent().siblings().children("dt").css({
            backgroundColor: ""
        })
    })
    $(".systeminright>dl>dd").mouseenter(function () {
        $(this).css({
            background: "url(images/cj02.png) no-repeat center",
        }).siblings().css({
            background: "",
        }).parent().siblings().children("dd").css({
            background: "",
        })
    })
    $(".systeminright>dl>dd").mouseout(function () {
        $(this).css({
            background: "",
        })
    })
    $(".glsystem").mouseenter(function () {
        $(".systeminleft").animate({
            left: -117,
        }, 1000, "swing").children("img").animate({
            width: 400,
            height: 439,
        }, 1500, "linear")
    })

    $(".glgame li a").eq(2).css({
        backgroundColor: "#de5051",
        color: "#fff",
        fontWeight: "bolder",
        borderRadius: "15px"
    })

    $("#lisUl li").mouseenter(function () {
        $(this).children("a").css({
            backgroundColor: "#de5051",
            color: "#fff",
            fontWeight: "bolder",
            borderRadius: "15px"
        }).parent().siblings().children("a").css({
            backgroundColor: "",
            color: "",
            fontWeight: "",
            borderRadius: ""
        })
        var gamedex = $(this).index() / 2;
        $("#downid ul").eq(gamedex).fadeIn(1000).siblings().hide()

    })

    $(".playupin>ul>li>a").eq(2).css({
        backgroundColor: "orange",
        color: "#fff",
        fontWeight: "bolder",
        borderRadius: "15px"
    })
    $(".playupin>ul>li>a").mouseenter(function () {
        $(this).css({
            backgroundColor: "orange",
            color: "#fff",
            fontWeight: "bolder",
            borderRadius: "15px"
        }).parent().siblings().children("a").css({
            backgroundColor: "",
            color: "",
            fontWeight: "",
            borderRadius: ""
        })
    })
    $(".aone").mouseenter(function () {
        $(".ultwo").slideUp(2000);
        $(".ulthree").fadeIn(3000);
    })
    $(".atwo").mouseenter(function () {
        $(".ulone").slideUp(2000);
        $(".ultwo").fadeIn(2000);
    })
    $(".athree").mouseenter(function () {
        $(".ulthree").slideUp(2000);
        $(".ulone").fadeIn(1000);
    })
    var $1 = $.noConflict();
    $1(".playdownin>ul>li").mouseenter(function () {
        $1(this).shake(4, 5, 800)
    })
    $(".doortopin a").eq(4).css({
        backgroundColor: "#66b1d3",
        borderRadius: "14px",
    })
    $(".doortopin ul li").mouseenter(function () {
        $(this).children("a").css({
            backgroundColor: "#66b1d3",
            borderRadius: "14px",
        }).parent().siblings().children("a").css({
            backgroundColor: "",
            borderRadius: "",
        })
        var arrdex = $(this).index() / 2;
        $(".doordown div").eq(arrdex).fadeIn(1000).siblings().hide()

    })
    $(window).scroll(function () {
        var $navBar = $(".glnav ul");
        if ($(this).scrollTop() > 530) {
            $navBar.addClass("fixed").next().css("marginTop", $navBar.height() + 120);
        }else {
            $navBar.removeClass("fixed").next().css("marginTop", 120);
        }
    })
    $(".nav01").click(function() {
        $("html,body").animate({
            scrollTop: $("#bra1").offset().top-$(".glnav").height()
        }, 1000,"linear");
    })
    $(".nav02").click(function() {
        $("html,body").animate({
            scrollTop: $("#bra2").offset().top-$(".glnav").height()
        }, 1000,"linear");
    })
    $(".nav03").click(function() {
        $("html,body").animate({
            scrollTop: $("#bra3").offset().top-$(".glnav").height()
        },1000,"linear");
    })
    $(".nav04").click(function() {
        $("html,body").animate({
            scrollTop: $("#bra4").offset().top-$(".glnav").height()
        }, 1000,"linear");
    })
    $(".nav05").click(function() {
        $("html,body").animate({
            scrollTop: $("#bra5").offset().top-$(".glnav").height()
        }, 1000,"linear");
    })
    $(".nav06").click(function() {
        $("html,body").animate({
            scrollTop: $("#bra5").offset().top-$(".glnav").height()
        }, 1000,"linear");
    })
    $(".nav07").click(function() {
        $("html,body").animate({
            scrollTop: $("#bra5").offset().top-$(".glnav").height()
        }, 1000,"linear");
    })
    $("b").click(function() {
        $("html,body").animate({
            scrollTop: $("#head1").offset().top-$(".glnav").height()
        }, 2000,"linear");
    })
    $(".glbegin").mouseenter(function() {
        $(this).animate({
            marginTop:300,
            fontSize:0,
        },800,"linear")
        $(".glimage img").animate({
            width:280,
            height:200,
            marginTop:50,
        },800,"linear")
    })
    $(".glbegin").click(function() {
        $(this).hide(1000);
        $(".gh1").slideToggle(1000);
        $(".gh2").fadeIn(1000)
        $(".glimage img").animate({
            right:0,
            bottom:0,
            width:0,
            height:0,
        },600)
    })



})





