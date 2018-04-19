var me ={
	age:100,
	name:'unknow',
	show:function(){
		console.log('我是'+this.name+'今年'+this.age+'岁了');
	}
}
me.show();
//我是unknow今年100岁了


console.log(typeof Array)
console.log(typeof Math)
console.log(typeof Date)
console.log(typeof Function)
console.log(typeof Object)
console.log(typeof Number)
console.log(typeof String)
console.log(typeof Boolean)
console.log(typeof JSON)
//function
//object
//function
//function
//function
//function
//function
//function
//object


String instanceof Object
//true
String instanceof Function
//true
Math instanceof Function
//false
console.log(new Function() instanceof Function
// true
console.log(new(new Function()) instanceof Function);
//false



console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);
console.log(Math instanceof Object);
console.log(JSON instanceof Function);
console.log(JSON instanceof Object);
//true
//true
//true
//true
//true
//true
//true
//true
//true
//true
//true
//true
//true
//true
//false
//true
//false
//true

var o={
_x:1.0,
get x(){
return this._x;
}
}
console.log(o.x);
o.x=2;
console.log(o.x);
//1
//1



var o={
_x:1.0,
get x(){
return this._x;
},
set x(val){
this._x=val;
}
}
console.log(o.x);
o.x=2;
console.log(o.x,o._x);
// 1
// 2 2


var p1={
	_name:'Jack',
	_age:23,
	set age(val){
		if(val>0&&val<150){
			this._age=val;
		}
		else{console.log('请设置正常年龄');}
	},
	get age(){
		return this._age;
	}
};
p1.age=178;
//请设置正常年龄


var o={
x:12,
}
o.__proto__===Object.prototype;
//true

var o2=Object.create(o);
o2.__proto__===o;
//true

var Person=function(name){
this.name=name;
}
var p=new Person('abc');
p.__proto__===Person.prototype;
//true
Person .__proto__.__proto__.__proto__===null;
//true


















































































