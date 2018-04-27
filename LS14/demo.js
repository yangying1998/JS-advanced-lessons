var a=1;
function f1(){
var b=2;
function f2(){
console.log(a,b);
}
f2();
}
f1();
// 1 2



function thisTest(){
console.log(this===window);
}
thisTest();
//true

var a=10,b='Hi';
function thisTest(){
this.a=20;
delete this.b;
this.c='新添加的全局变量';
}
thisTest();
console.log(a,c);
//20 新添加的全局变量


var point={
x:0,
y:0,
moveTo:function(x,y){
this.x=x;
this.y=y;
}
}
point.moveTo(1,1);//this绑定到当前对象，即point对象
console.log(point);
//{x: 1, y: 1, moveTo: ƒ}


function person(age){
this.age=age;
}
var p=new person(23);
//undefined
p.age
//23


var person=function(name,age){
this.name=name;
this.age=age;
this.showMe=function(){
console.log(this.name,this.age);}
}
var p1=new person('Mike',23);
var p2=new person('Lucy',22);
p1.showMe();
p2.showMe();
// Mike 23
// Lucy 22



objA={name:'AA',x:1};
objB={name:'BB',x:5};
function test(){console.log(this.name,this.x);}
objA.fun=test;
objA.fun();
objA.fun.call(objB);
// AA 1
// BB 5


var point={
x:0,
y:0,
moveTo:function(x,y){
function moveTox(x){
this.x=x;
}
function moveToy(y){
this.y=y;
}
moveTox(x); 
moveToy(y);}
}
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);
// {x: 0, y: 0, moveTo: ƒ}
// 2 2


var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		var that=this;
		function moveTox(x){
			that.x=x;
		}
		function moveToy(y){
			that.y=y;
		}
	moveTox(x);
	moveToy(y);}
	}
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);

// {x: 2, y: 2, moveTo: ƒ}
// 2 2


