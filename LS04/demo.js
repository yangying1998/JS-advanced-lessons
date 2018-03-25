//function foo(){
//"use strict"
//console.log(this);
//}
//foo();
//VM231:3 undefined
//undefined
function Isstrictmode(){
	//补全代码
//return this===undefined?true:false;
if(this==undefined){
return true;
}
else{
return false;
}
}
console.log(Isstrictmode());
VM626:18 false
//undefined


function sloppyFunc(){
	sloppyVar=123;
}
sloppyFunc();
console.log(sloppyVar);
VM199:5 123
undefined
function sloppyFunc(){
}
undefined
function sloppyFunc(){
	//"use strict"使用严格模式报错
	sloppyVar=123;
}
sloppyFunc();
console.log(sloppyVar);
VM242:6 123
undefined


var i=65;
switch(new Boolean(true)){
    case i>=60:
console.log("及格");
    case i<=60:
console.log("不及格");
    default:
console.log("default");
}
VM414:8 default
undefined
var i=65;
switch(new Boolean(true)){
    case(new Boolean( i>=60)):
console.log("及格");
    case (new Boolean( i<=60)):
console.log("不及格");
    default:
console.log("default");
}

VM421:8 default
undefined


var obj={x:20,y:20,z:"30"}
var str1=""+obj;
console.log(str1);
VM153:3 [object Object]
undefined


var x="1";
x+=1;
console.log(x);
VM105:3 11


x/=1;
console.log(x);
VM109:2 11


var x="1";
x+=1;
console.log(x);
VM105:3 11
undefined
x/=1;
console.log(x);
VM109:2 11
undefined
typeof(x);
"number"

console.log(3===3);
console.log(3==="3");
console.log(3=="3");
console.log(3==new String(3));
console.log(3===new String(3));
VM208:1 true
VM208:2 false
VM208:3 true
VM208:4 true
VM208:5 false


var obj1=new String("xyz");
var obj2=new String("xyz");
console.log("xyz"===obj1);
VM270:3 false
undefined
console.log(obj1==obj2);
VM286:1 false
undefined

console.log("xyz"!=obj1);
console.log(obj1!=obj2);


VM331:1 false
VM331:2 true


var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);
console.log(obj1.y===obj2.y);
console.log(obj1.z===obj2.z);
console.log(obj1.x==obj2.x);
console.log(obj1.y==obj2.y);
console.log(obj1.z==obj2.z);
VM507:3 true
VM507:4 false
VM507:5 false
VM507:6 true
VM507:7 false
VM507:8 false


var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean()};
console.log(obj1.z==obj2.z);
VM525:3 true


var score=76;
if(score>90){
	console.log("优");
}else if(score>75){
	console.log("良");
}else if(score>60){
	console.log("及格");
}else{
	console.log("不及格");
}
VM908:5 良
undefined
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||(score<60&&"不及格"));
VM986:1 良

var str="return a<b?a:b";
var min=new Function("a","b",str);
min(2,3);
2
var max=new Function("a","b","return a>b?a:b");
max(2,3);

3
function max(a,b){
    return a>b?a:b;
}
max(2,3);
3
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);
3


var obja={name:"aa"};
var objb={name:"bb"};
obja.foo=function(){console.log(this.name);}
obja.foo();
obja.foo.call(objb);
VM974:3 aa
VM974:3 bb


var fish={
	name:"fish",
	swim:function(m,n){console.log("I'm"+this.name+"I can swim_",m,n);}
}
var bird={
	name:"polly",
	fly :function(m,n){console.log("I'm"+this.name+"I can fly_",m,n);}
}
var me={name:"abc"};
fish.swim.call(me,3,4);
bird.fly.appply(me,[7,8]);


console.log("xyz"!=obj1);
console.log(obj1!=obj2);


VM331:1 false
VM331:2 true





