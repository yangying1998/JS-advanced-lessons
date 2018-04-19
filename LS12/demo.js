var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var Obj3=function(){
this.z=3;
}
var obj3=new Obj3();
console.log(obj1,obj2,obj3);


var obj={
x:1,
y:2
};
for(var k in obj ){console.log(k,obj[k]);}
//x 1
//y 2



var obj={x:1,y:2}
Object.defineProperty(obj,'x',{enumerable:false});
for(var k in obj){console.log(k,obj[k]);}
//y 2


var person={name:'Jack'}
Object.defineProperty(person,'name',{
writable:false,
configurable:false,
enumerable:true,
value:'Mike'
});
console.log(person.name);
person.name='Lucy';
console.log(person.name);
delete person.name;
console.log(person.name);
//Mike
//Mile
//Mike


var person={name:'Jack'}
Object.defineProperty(person,'name',{
writable:true,
configurable:false,
enumerable:true,
value:'Mike'
});
console.log(person.name);
person.name='Lucy';
console.log(person.name);
delete person.name;
console.log(person.name);
//Mike
//Lucy
//Lucy


var obj={x:1,y:2};
obj.z=3;
for(var k in obj){console.log(k,obj[k]);}
//x 1
//y 2
//z 3

var obj={x:1,y:2};
obj.z=3;
Object.defineProperty(obj,'w',{values:456,configurable:true});
for(var k in obj ){console.log(k,obj[k]);}
//x 1
//y 2
//z 3


var obj={x:1};
Object. defineProperty(obj,'y',{value:2,writable:false});
var xDes=Object.getOwnPropertyDescriptor(obj,'x');
var yDes=Object.getOwnPropertyDescriptor(obj,'x');
console.log(xDes,yDes);
// {value: 1, writable: true, enumerable: true, configurable: true} 
//{value: 1, writable: true, enumerable: true, configurable: true}


