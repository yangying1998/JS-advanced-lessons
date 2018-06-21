var name='Jack';
var person={
name,
showinfo(){
console.log(this.name);}}
person.showinfo();
// Jack



var obj1={a:1,b:2};
var obj2={c:3,d:4};
Object.setPrototypeOf(obj2,obj1);
console.log(obj2.a,obj2.b,obj2.c,obj2.d);
// 1 2 3 4


var obj1={a:1,b:2};
var obj2=Object.create(obj1);
obj2.c=3;
obj2.d=4;
console.log(obj2.a,obj2.b,obj2.c,obj2.d);
Object.keys(obj2);
// 1 2 3 4
//["c", "d"]
'a' in obj2;
//true



var max=function(a,b){return a>b?a:b;}
max(2,3);
//3
var max=(a,b)=>a>b?a:b;
max(2,3);
//3


function foo(x,...y){console.log(y);}
foo(1,2,3);
//(2) [2, 3]



