

window.onload = function (){
    var a234 = document.getElementById("a234");
    var a123 = document.getElementById("a123");
    var a1 = a234.innerHTML;
    a123.onclick = function () {
        a1++;
        a234.innerText = a1;
    }
}