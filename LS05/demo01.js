var a=new Array(5);
console.log(a);
VM166:2 (5) [empty × 5]

console.log(typeof new Function());
// function

console.log(typeof (new new Function()));
//object

console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);
console.log(Math instanceof Object);
console.log(JSON instanceof Function);
console.log(JSON instanceof Object);
//true
//true
// false
// true
// false
//true

var person=function(name){
	this.name=name;
}
console.log(person instanceof Function);
console.log(person instanceof Object);
var p=new person("Jack");
console.log(p instanceof Function);
console.log(p instanceof Object);
// true
// true
// false
//true

function test(){
	if (test.caller==null){
		console.log("test is called from the toppest level");}
	else{console.log("test is called from the function");}
}
function testouter(){
	test();
}
testouter();
// test is called from the function
