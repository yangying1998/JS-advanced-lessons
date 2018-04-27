var obj1={x:1};
var obj2=Object.create(obj1);
var Obj3=function(){}
var obj3=new Obj3;

function Person(age,name){
this.age=age;
this.name=name;
}
var p1=new Person(20,'abc');
var p2=new Person(19,'def');
p1 instanceof Person;
//true


var a={};
a.__proto__;
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
a.__proto__===Object.prototype;
//true
var b=new Object;
b.__proto__===Object.prototype;
//true
b.__proto__.__proto__;
//Object.prototype.__proto__
//null



var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=Object.create(obj1);
obj3.y=3;
console.log(obj1,obj2,obj3);
// {x: 1} {y: 2} {y: 3}
obj3.x
//1
obj2.__proto__.x=5;
//5
obj3.x;
//5

var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3

"z" in obj; //true
obj.hasOwnProperty("z"); //false
obj.z = 5;
obj.hasOwnProperty('z'); // true
obj.z; // 5
proObj.z; // still 3
obj.z = 8;
obj.z; // 8
delete obj.z; // true
obj.z; // 此时是几？
delete obj.z; // true
obj.z; // still 3!!!

VM1147:7 1
VM1147:8 2
VM1147:9 3
3
var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

/////Part2 原型链属性操作///
obj.z = 5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了
// 1
// 2
// 3
// true
//false
// true
// 5
// 3
// 8
// 3
// 3
//undefined

function Person(name,age){
this.name=name;
this.age=age;
}
Person.prototype.sayHi=function(){
console.log(this.name,this.age);
}
var p=new Person('Mike',23);
p.sayHi();
// Mike 23
p.__proto__===Person.prototype
//true
Person.__proto__===Function.prototype;
//true
Person.__proto__.__proto__===Object.prototype;
//true
Person.__proto__.__proto__.__proto__;
//null

