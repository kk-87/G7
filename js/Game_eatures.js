
$(function(){
    $(".picBox01").mouseenter(function(){
        $(this).find(".bgi-font-top").stop().slideUp(100);
        $(this).find(".bgi-font-bottom").stop().slideDown(100);
        $(this).find(".txt2").stop().animate({bottom:'40px'});
        $(this).find(".txt1").stop().animate({top:"20px"});
    });
    $(".picBox01").mouseleave(function(){
        $(this).find(".bgi-font-top").stop().slideDown(100);
        $(this).find(".bgi-font-bottom").stop().slideUp(100);
        $(this).find(".txt2").stop().animate({bottom:'110px'});
        $(this).find(".txt1").stop().animate({top:"60px"});
    });
    $(".little-circle .gl").click(function(){
        $(".con-zj").animate({"left":"-640px"});
        $(this).addClass("curr");
        $(this).siblings().css("background-position","-37px -20px");
    });
    $(".little-circle .curr").click(function(){
        $(".con-zj").animate({"left":"0"});
        $(this).siblings().removeClass("curr");
        $(this).css("background-position","-47px -20px");
    })
});