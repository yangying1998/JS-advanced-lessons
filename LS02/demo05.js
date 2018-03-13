(function () {//立即执行表达式开始


var str_a = "Hello World";
function fn_a(arg){
    console.log(arg); // #1 --> Hello World
    arg = "Hai";
    console.log(str_a,arg); // #2 --> Hello World , Hai
};
fn_a(str_a);
console.log(str_a);// #3 这时候str_a:"Hello World"


var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);// 这时候obj_a是{value:3}

function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象
};
fn_b(obj_a);
console.log(obj_a);// 这时候obj_a是{value:3}

}());