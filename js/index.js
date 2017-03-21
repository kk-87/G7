
window.onload = function () {
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

    for (var i = 0; i < ullis.length - 1; i++) {
        var li = document.createElement("li");

        ol.appendChild(li);
    }
    var ollis = ol.children;
    ollis[0].className = "current";

    for (var i = 0; i < ollis.length; i++) {
        ollis[i].index = i;
        ollis[i].onclick = function () {
            for (var i = 0; i < ollis.length; i++) {
                ollis[i].className = "";
            }
            this.className = "current";
            var idx = this.index;
            var target = -idx * imgWidth;
            animate(ul, {left: target});
            pic = square = idx;
        }
    }

    box.onmouseover = function () {
        arr.style.display = "block";

        clearInterval(timer);
    }
    box.onmouseout = function () {
        arr.style.display = "none";

        timer = setInterval(function () {
            arrright.click();
        }, 2000);
    }


    var pic = 0;
    var square = 0;
    arrright.onclick = function () {

        if (pic == ullis.length - 1) {
            pic = 0;
            ul.style.left = "0px";
        }
        pic++;
        var target = -pic * imgWidth;
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

    arrleft.onclick = function () {
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

        timer = setInterval(function () {
            arrright.click();
        }, 4000);
    }

    var a234 = document.getElementById("a234");
    var a123 = document.getElementById("a123");
    var a1 = a234.innerHTML;
    a123.onclick = function () {
        a1++;
        a234.innerText = a1;
    }
}
