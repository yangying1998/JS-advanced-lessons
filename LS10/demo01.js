function f1(){
var x=1;
function f2(){
return x++;
}
return f2;
}
var f3=f1();
console.log(f3());
console.log(f3());
//1
//2


function f1(){
var x=1;
function f2(){
return x++;
}
return f2();
}
var f3=f1();
console.log(f3);
console.log(f3);
//1
//1


function createinc(startvalue){
return function(step){
startvalue+=step;
return startvalue;
}
}
var inc=createinc(5);
console.log(inc(1));
console.log(inc(2));
//6
//8


function createinc(startvalue){
return function(step){
startvalue+=step;
return startvalue;
}
}
var inc=createinc(5);
console.log(inc(1));
console.log(inc(2));
var inc2=createinc(5);
console.log(inc(1));
console.log(inc(2));
//6
//8
//9
//11


var tmp=100;//注意词法作用域
function foo(x){
var tmp=3;//注意词法作用域
return function(y){
console.log(x+y+(++tmp));
}
}
var fee=foo(2);//fee形成了一个闭包
fee(10);
fee(10);
fee(10);
//16
//17
//18


var db=(function(){
var data={};
return function(key,val){
if(val==undefined){return data[key];}
else{return data[key]=val;}
}
})();
db('x');
db('x',1);
db('x');
//1