
function animate(element, json, fn) {
    if(element.timer) {
        clearInterval(element.timer);
    }

    element.timer = setInterval(function () {
        var flag = true;
        for(var k in json) {
            if(k == "opacity") {
                var attr = k;
                var target = json[k];

                var leader = getStyle(element, attr);//获取到的100px这种,auto
                //1. 把parseInt改成了parseFloat
                leader = parseFloat(leader) || 0;

                //2. 把leader和target同时放大100倍
                leader = leader*100;
                target = target * 100;

                var step = (target - leader)/10;
                //保证每一次最少跑1px
                if(step>0){
                    step = Math.ceil(step);
                }else {
                    step = Math.floor(step);
                }

                leader = leader + step;
                //3. 首先不要px， 除以100
                element.style[attr] = leader/100;

                if(leader != target){
                    flag = false;
                }


            } else if(k == "zIndex"){
                //案例需要，要对zIndex做一个特殊的处理
                element.style.zIndex = json[k];
            }else {
                var attr = k;
                var target = json[k];

                var leader = getStyle(element, attr);//获取到的100px这种,auto
                leader = parseInt(leader) || 0;
                var step = (target - leader)/10;
                //保证每一次最少跑1px
                if(step>0){
                    step = Math.ceil(step);
                }else {
                    step = Math.floor(step);
                }

                leader = leader + step;
                element.style[attr] = leader + "px";

                if(leader != target){
                    flag = false;
                }
            }
        }

        if(flag) {
            clearInterval(element.timer);
            fn && fn();
        }

    }, 15);
}

function getStyle(element, attr) {
    //能力检测
    if(window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}