window.onload = function () {
    //找对象
    var account = document.getElementById("nametxt");
    var pwd = document.getElementById("inpt-pw");
    var pwd2 = document.getElementById("inpt-pw2")
    var phone = document.getElementById("inpt-phone");

    //验证用户名 account 格式:********@qq.com
    account.onblur = function () {
        var value = account.value;
        var emailExp = /^\w+@(\w+.)+c((om)|(n))$/;
        var error = document.getElementsByClassName("b-p")[0];
        if (emailExp.test(value)) {
            error.innerHTML = "正确";
            error.style.color = "green";
            $(".b-i>i")[0].style.background = "url(image/sprite.png) -28px -98px"
        } else {
            error.innerHTML = "邮箱格式不合法";
            error.style.color = "red";
            $(".b-i>i")[0].style.background = "url(image/sprite.png) -63px -98px"
        }
    }

    //验证密码 pwd 6-16位数字字母
    pwd.onblur = function () {
        var value = pwd.value;
        var pwdExp = /\w{6,16}/;
        var error = document.getElementsByClassName("b-p")[1];
        if (pwdExp.test(value)) {
            error.innerHTML = "正确";
            error.style.color = "green";
            $(".b-i>i")[1].style.background = "url(image/sprite.png) -28px -98px"
        } else {
            error.innerHTML = "密码须由6-16个字符组成，区分大小写";
            error.style.color = "red";
            $(".b-i>i")[1].style.background = "url(image/sprite.png) -63px -98px"
        }
    }

    //确认密码
    pwd2.onblur = function () {
        var value = pwd2.value;
        var pwd2Exp = /\w{6,16}/;
        var error = document.getElementsByClassName("b-p")[2];
        if (pwd2Exp.test(value)) {
            error.innerHTML = "正确";
            error.style.color = "green";
            $(".b-i>i")[2].style.background = "url(image/sprite.png) -28px -98px"
        } else {
            error.innerHTML = "两次输入的密码不相同，请从新输入";
            error.style.color = "red";
            $(".b-i>i")[2].style.background = "url(image/sprite.png) -63px -98px"
        }
    }

    //手机验证 11位
    phone.onblur = function () {
        var value = phone.value;
        var phoneExp = /^(13[0-9]|15[0-9]|17[01579]|18[0-35-9])\d{8}$/;
        var warming = $("#phone")[0];
        console.log(warming);
        if (phoneExp.test(value)) {
            warming.innerHTML = "正确";
            warming.style.color = "green";
            $(".b-i>i")[3].style.background = "url(image/sprite.png) -28px -98px"
        } else {
            warming.innerHTML = "请输入正确的手机号码";
            warming.style.color = "red";
            $(".b-i>i")[3].style.background = "url(image/sprite.png) -63px -98px"
        }
    }

    //短信验证码
    var wait=60;
    function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            o.value="免费获取验证码";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value="重新发送(" + wait + ")";
            wait--;
            setTimeout(function() {
                    time(o)
                },
                1000)
        }
    }
    document.getElementById("btn").onclick=function(){time(this);}

}