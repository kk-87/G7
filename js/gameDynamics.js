/**
 * Created by kaka on 2016/11/24.
 */

window.onload = function (){
    var a234 = document.getElementById("a234");
    var a123 = document.getElementById("a123");
    var a1 = a234.innerHTML;
    //console.log(a1);
    a123.onclick = function () {
        alert('111');
        a1++;
        console.log(a1);
        a234.innerText = a1;
    }
}