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
// 45



