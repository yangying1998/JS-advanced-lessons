var a=10,b=20;
function fn(){
var a=100,c=200;
//console.log(a,b,c,d);
	function bar(){
	var a=500,d=600;
	console.log(a,b,c,d);
    }
	bar();
}
fn();
//500 20 200 600

var a=10,b=20;
function fn(){
var a=100,c=200;
//console.log(a,b,c,d);
	function bar(){
	var a=500;d=600;
	
    }
	bar();
console.log(a,b,c,d);
}
fn();
// 100 20 200 600

var scope="global";
function checkScope(){ 
	var scope="local";
	return function(){
	return scope;
}
}
console.log(checkScope()());
// local


var scope="global";
function checkScope(){ 
	var scope="local";
	return new Function("return scope");
}
console.log(checkScope()());
// global
