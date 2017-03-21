

$(function(){
    $(".bomT-R").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        var idx=$(this).index();
        $(".table-bomBa").eq(idx).addClass("selected").siblings().removeClass("selected")
    })
})

var email=document.getElementById("email");
var mim=document.getElementById("mim");
var tishi = document.getElementById("tishi");
var  strengthLevel=document.getElementById("strengthLevel");
var arr=["","强度低","强度中","强度高"]

email.onblur = function () {
    var you= /^\w+@\w+(\.\w+)+$/;
    if(!you.test(this.value)){
        this.nextElementSibling.innerHTML= "格式错误";
        this.nextElementSibling.className = "jiaoz";
    }else {
        this.nextElementSibling.innerHTML = "格式正确";
        this.nextElementSibling.className = "green";
    }
}

mim.onkeyup=function(){
        var level=0;
        if(/\d/.test(this.value)){
            level++;
        }
        if(/[a-z]/.test(this.value)){
            level++
        }
        if(/[^a-z0-9]/.test(this.value)) {
            level++;
        }
        if(this.value.length<6){
            level=0;
        }
        strengthLevel.className="strengthLv"+level;
        tishi.innerHTML=arr[level];
    }

