/**
 * 首页
 * 2018/03/13
 */
$(function() {
    $(".header>li").click(function() {
        var i = $(this).index();
        $(this).addClass("list-active").siblings().removeClass("list-active"); // 切换类
        oSwitch();
    });




    $(".header>li").eq(0).click();

    function oSwitch() {
        $("#content").html("");
        switch ($(".list-active").text()) {
            case "首页":
                // 如果值为1 ，则执行函数 1
                first();
                // console.log(111);
                break;
            case "服饰":
                // 如果值为2，则执行函数 2
                second();
                // console.log(222);
                break;
            case "数码家电":
                // 如果值为4 ，则执行函数 3
                third();
                // console.log(333);
                break;
            case "化妆品":
                // 如果值为4 ，则执行函数 4
                fourth();
                // console.log(444);
                break;
            case "母婴":
                // 如果值为1 ，则执行函数 1
                five();
                // console.log(111);
                break;
            case "食品":
                // 如果值为2，则执行函数 2
                six();
                // console.log(222);
                break;
            case "文体":
                // 如果值为4 ，则执行函数 3
                seven();
                // console.log(333);
                break;
            case "家居":
                // 如果值为1 ，则执行函数 1
                eight();
                // console.log(111);
                break;
            case "车|玩物|宠物":
                // 如果值为2，则执行函数 2
                nine();
                // console.log(222);
                break;
        }
    }


});