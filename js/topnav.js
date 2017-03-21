/**
 * Created by L on 2016/11/23.
 */

$(function(){
    var flag=true;
    $(".rightNav").click(function(){
        if(flag){
//                $(this).css("backgroundColor","#282b2d").children("i").css("backgroundPosition","-34px 0");
//                $(".topContent").animate({height:'800px'});

            $(this).css("backgroundColor","#282b2d").children("i").css("backgroundPosition","-34px 0");
            $(".topContent").stop().slideDown(1500);
        }else {
//                $(this).css("backgroundColor","#cf1132").children("i").css("backgroundPosition","0 0");
//                $(".topContent").animate({height:'0px'});
            $(this).css("backgroundColor","#cf1132").children("i").css("backgroundPosition","0 0");
            $(".topContent").stop().slideUp(1000);
        }
        flag=!flag;
    });
});
$(function(){
    $(".ulNav li a").mouseenter(function(){
        $(this).children("i").stop().animate({width:'100%'},200);

    });
    $(".ulNav li a").mouseleave(function(){
        $(this).children("i").stop().animate({width:'0'},100);
    });
});

$(function(){
    $(".close").click(function(){
        $(".rightNav").css("backgroundColor","#cf1132").children("i").css("backgroundPosition","0 0");
        $(".topContent").stop().slideUp(1000);
    });
});

