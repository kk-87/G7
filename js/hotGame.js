/**
 * Created by Lenovo on 2016/11/23.
 */
$(function () {

    //功能1点击"换一批"换图片
    var num = 0;

    $(".con-title .change").click(function () {
        if ($(".box1").css("display") == 'block') {
            num++;
            if (num == $(".box1").children().length) {
                num = 0;
            }
            $(".box1").children().eq(num).fadeIn(500).siblings().fadeOut(500);
        } else {
            num++;
            if (num == $(".box2").children().length) {
                num = 0;
            }
            $(".box2").children().eq(num).fadeIn(500).siblings().fadeOut(500);
        }


    });

    //点击"玩家热议"显示box2 隐藏box1

    $(".con-title .player").click(function () {
        $(".box2").show(500);
        $(".box1").hide(300);
        $(".con-title .game-video").css("color", "#272a2c");
        $(this).css("color", "#cf1132")
    })

    //点击"玩家热议"显示box1 隐藏box2

    $(".con-title .game-video").click(function () {
        $(".box1").show(500);
        $(".box2").hide(300);
        $(".con-title .player").css("color", "#272a2c");
        $(this).css("color", "#cf1132");
    })
    //点击心形图形em+1
    $(".like ").click(function () {
        $(this).find("i").stop().animate({"top": "-23px", "opacity": "1"}, 200, function () {
            $(".like i").stop().animate({"opacity": "0"}, function () {
                $(".like i").css("top",0);
            });

        });
        var value = parseInt($(this).find("em").html());
        $(this).find("em").html(value + 1);
        console.log(value);
    })


})