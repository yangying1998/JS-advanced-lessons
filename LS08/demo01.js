var x=45;
var obj={
	x:23,
test:function(){
	function foo(){
	console.log(this.x);
}
var fee=foo.bind(this);
fee();
}
}
obj.test();
// 23


var x=45;
var obj={
	x:23,
test:function(){
	function foo(){
	console.log(this.x);
}
var fee=foo.bind(this);
fee();
foo();
}
}
obj.test();

// 23
 //45

 console.log(typeof (new new Function()));
// object


var obj1={
foo:function(y){
console.log(this.x,y);
}
}
var obj2={
x:34
}
obj1.foo.call(obj2,"xx");
// 34 "xx"

console.log(a);
var a=2;
console.log(a);
// undefined
// 2

console.log(foo);
var foo=function(){
console.log("foo");
}
foo();
// undefined
// foo


AA();
function AA(){
console.log("AA_1");
}
// AA_1

var AA=function AA(){
console.log("AA_2");
}
AA();
// AA_2

var name="Jack";
function echo(){
console.log(name);
}
function foo(){
var name="Bill";
echo();
}
foo();
// Jack








