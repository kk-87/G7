
window.onload=function(){

    var NIE_topBar=document.getElementById("NIE-topBar");
    var stick_con=document.getElementById("stick_con");
    var download_stick=document.getElementById("download_stick");

    //当页面滚动的时候触发页onscroll事件
    window.onscroll= function () {

        var scrollTop=scroll().top;
        //当高度大于（第一张背景图的高度+NIE_topBar的高度）的时候就显示stick_con，否则就隐藏stick_con
        if(scrollTop>=694+NIE_topBar.offsetHeight){
            stick_con.style.display="block";
            //NIE_topBar.style.display="none";
            stick_con.style.position="fixed";
            stick_con.style.left="50%";
            stick_con.style.marginLeft = "-630px";
            stick_con.style.top="0";
            stick_con.style.zIndex="9999";

            download_stick.style.opacity="1";
        }else{
            NIE_topBar.style.display="block";
            stick_con.style.display="none";
            stick_con.style.position="relative";

            download_stick.style.opacity="0";
        }
    }
}

function scroll(){
    return {
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    }
}

$(function () {

    $(window).scroll(function () {
      var $scrollT=  $(window).scrollTop();

        if($scrollT>=1200){
            $(".box-icn .a1").animate({opacity:1},1000);
            $(".box-icn .a2").animate({opacity:1},1000);
            $(".box-icn .a3").animate({opacity:1},1000);
        }
        if($scrollT>=2200){
            $(".b1").animate({opacity:1},1000);
            $(".b2").animate({opacity:1},1000);
            $(".b3").animate({opacity:1},1000);
        }
    })

    //三角上下运动
    setInterval(function () {
        var top_a= $(".Roll a").offset().top;
        console.log(top_a);
        if(top_a==808){
            $(".Roll a").offset({"top":813});
        }else  if(top_a==813){
            $(".Roll a").offset({"top":808});
        }
    },500)
})

