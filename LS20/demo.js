window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    div2.onclick = function () {
        console.log("div2 click");
    }
}
function div1click() {
    console.log("div1 click");
}
//ƒ () {
   // console.log("window onload");
   // var div2 = document.getElementById("div2");
    //div2.onclick = function () {
     //   console.log("div2 click");
    //}
//}



window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };
    div2.onclick = eventHandler;
}
//ƒ (e) {
//    var div1 = document.getElementById("div1");
//    var div2 = document.getElementById("div2");
//    var eventHandler = function (e) {
//        console.log(e.clientX,e.clientY);
//    }
//    div1.on…



window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);
    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);
    div3.addEventListener("click",function (e) {
        console.log("div3 click");
    },false);
}
//ƒ (e) {
//    var div1 = document.getElementById("div1");
//    var div2 = document.getElementById("div2");
//    div1.addEventListener("click",function (e) {
//        console.log("div1 click");
 //   },false);…


//阻止默认事件行为
    document.getElementById("aId").addEventListener("click",function (e) {
        e.preventDefault();
        console.log("a click");
    });
}
