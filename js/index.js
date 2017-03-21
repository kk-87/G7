/**
 * Created by kaka on 2016/11/24.
 */
window.onload = function () {
    //1.�Ҷ���
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

    //2.��̬���ɽṹ
    //2.1 ����ol�����li
    for (var i = 0; i < ullis.length - 1; i++) {
        var li = document.createElement("li");

        ol.appendChild(li);
    }
    var ollis = ol.children;
    ollis[0].className = "current";
    //2.2 ���ɼ�ͼƬ
    //    var cloneli = ullis[0].cloneNode(true);
    //    ul.appendChild(cloneli);

    //3. ���ֲ��Ĺ���
    for (var i = 0; i < ollis.length; i++) {
        ollis[i].index = i;
        ollis[i].onclick = function () {
            //3.1 �õ�ǰli����
            for (var i = 0; i < ollis.length; i++) {

                ollis[i].className = "";
            }
            this.className = "current";
            // 3.2 �ƶ�ul
            var idx = this.index;
            var target = -idx * imgWidth;
            animate(ul, {left: target});

            pic = square = idx;
        }
    }
    //4. ���ҽ���Ĺ���
    //4.1 ������ע����꾭���¼�����ʾ��ͷ
    box.onmouseover = function () {
        arr.style.display = "block";

        clearInterval(timer);
    }
    //4.2 ������ע������뿪�¼������ؼ�ͷ
    box.onmouseout = function () {
        arr.style.display = "none";

        timer = setInterval(function () {
            arrright.click();
        }, 2000);
    }


    //4.3 ����Ҽ�ͷ
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

    //4.4 ������ͷ
    arrleft.onclick = function () {
        //����Ǽ�ͼƬ��ʱ�򣬻�����ͼƬ
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

        //�������ͼƬ����Ҫ���ɼ�ͼƬ
        //5. �Զ����ŵĹ���
        timer = setInterval(function () {
            arrright.click();
        }, 4000);
    }
    //6.ͬ��
    // 6.1 ����Ҽ�ͷ
    // 6.2 ������ͷ
    // 6.3 ���СԲȦ��ҲҪͬ��


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
