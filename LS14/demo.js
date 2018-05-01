var superObj={x:1,y:2};
var super_first=Object.create(superObj);
var super_second=Object.create(superObj);
super_first.__proto__.x=5;
console.log(super_second.x);
// 5


var superObj={
show:function(){
console.log(this.x,this.y);
}
};
var super_first=Object.create(superObj);

super_first.x=1;
super_first.y=2;
super_first.show();
//1  2


var superObj={
x:3,
y:4,
show:function(){
console.log(this.x,this.y);
}
};
var super_first=Object.create(superObj);
super_first.show();
//3  4


function person(name){this.name=name;
};
person.prototype.age=22;
person.prototype.showname=function(){console.log(this.name);};
function student(id){this.id=id;}
student.prototype=new person('Mike');
var s1=new student(2017001);
var s2=new student(2017002);
console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
s1.__proto__.name='Jake';
console.log(s2.name);
s2.__proto__.__proto__.age=99;
console.log(s2.age);
//Mike 22 2017001
//Mike 22 2017002
/// Jake
// 99



function person(name,age){this,name=name;this.age=age;};
person.prototype.showname=function(){console.log(this.name);};
function student(name,age,id){person.call(this,name,age);this.id=id;}
student.prototype.__proto__=person.prototype;
var s1=new student('xxx',22,2017001);
var s2=new student('www',23,2017002);



var baseclass=function(){};
baseclass.prototype.f2=function(){
console.log('this is a prototype method');
};
baseclass.f1=function(){console.log('this is a static method');};
baseclass.f1();
var instance1=new baseclass();
instance1.f2();
// this is a static method
// this is a prototype method


function Foo(){};
var f=new Foo();
console.log(f.constructor.name);
function Constr(name){this.name=name;}
var x=new Constr('Jack');
var y=new x.constructor('Mike');
console.log(y,y instanceof Constr);
//Foo
//Constr {name: "Mike"} true

function A(id){
this.publicId=id;
var privateId=456;
this.getId=function(){
console.log(this.publicId,privateId);
}
}
var a=new A(123);
console.log(a.publicId);
a.getId();
// 123
// 123 456


