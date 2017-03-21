/**
 * Created by kaka on 2016/11/24.
 */
window.onload = function () {
    //1.找对象
    var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ullis = ul.children;
    var ol = screen.children[1];

    var arr = document.getElementById("arr");
    var arrleft = document.getElementById("left");
    var arrright = document.getElementById("right");

    var imgWidth = screen.offsetWidth;

    var timer = null;

    //2.动态生成结构
    //2.1 生成ol下面的li
    for (var i = 0; i < ullis.length - 1; i++) {
        var li = document.createElement("li");

        ol.appendChild(li);
    }
    var ollis = ol.children;
    ollis[0].className = "current";
    //2.2 生成假图片
    //    var cloneli = ullis[0].cloneNode(true);
    //    ul.appendChild(cloneli);

    //3. 简单轮播的功能
    for (var i = 0; i < ollis.length; i++) {
        ollis[i].index = i;
        ollis[i].onclick = function () {
            //3.1 让当前li高亮
            for (var i = 0; i < ollis.length; i++) {

                ollis[i].className = "";
            }
            this.className = "current";
            // 3.2 移动ul
            var idx = this.index;
            var target = -idx * imgWidth;
            animate(ul, {left: target});

            pic = square = idx;
        }
    }
    //4. 左右焦点的功能
    //4.1 给盒子注册鼠标经过事件，显示箭头
    box.onmouseover = function () {
        arr.style.display = "block";

        clearInterval(timer);
    }
    //4.2 给盒子注册鼠标离开事件，隐藏箭头
    box.onmouseout = function () {
        arr.style.display = "none";

        timer = setInterval(function () {
            arrright.click();
        }, 2000);
    }


    //4.3 点击右箭头
    var pic = 0;
    var square = 0;
    arrright.onclick = function () {

        if (pic == ullis.length - 1) {
            pic = 0;
            ul.style.left = "0px";
        }
        //console.log(pic);
        pic++;
        var target = -pic * imgWidth;
        //console.log(target);
        animate(ul, {"left": target});

        square++;
        if (square == ollis.length) {
            square = 0;
        }
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = "";
        }
        ollis[square].className = "current";
    }

    //4.4 点击左箭头
    arrleft.onclick = function () {
        //如果是假图片的时候，换成真图片
        if (pic == 0) {
            pic = ullis.length - 1;
            ul.style.left = -pic * imgWidth + "px";
        }

        pic--;
        var target = -pic * imgWidth;
        animate(ul, {"left": target});

        square--;
        if (square == -1) {
            square = ollis.length - 1;
        }
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = "";
        }
        ollis[square].className = "current";

        //如果是真图片，就要换成假图片
        //5. 自动播放的功能
        timer = setInterval(function () {
            arrright.click();
        }, 4000);
    }
    //6.同步
    // 6.1 点击右箭头
    // 6.2 点击左箭头
    // 6.3 鼠标小圆圈块也要同步


    var a234 = document.getElementById("a234");
    var a123 = document.getElementById("a123");
    var a1 = a234.innerHTML;
    //console.log(a1);
    a123.onclick = function () {
        // alert('111');
        a1++;
        // console.log(a1);
        a234.innerText = a1;
    }
}
