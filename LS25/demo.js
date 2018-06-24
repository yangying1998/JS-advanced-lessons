let s = Symbol();//不能用new
console.log(typeof s);
var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1); // Symbol(foo)
console.log(s2); // Symbol(bar)
// "symbol"
//Symbol(foo)
// Symbol(bar)




var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);
// 方法被覆盖了



var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';//注意中括号内不要加引号，后面介绍加引号和不加引号的区别
// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"



var sym1=Symbol('xx');
var sym2=Symbol('xx');
var str1='xx';
var str2='xx';
var obj={};
obj[sym1]='12';
obj[sym2]='34';
obj[str1]='56';
obj[str2]='78';
obj;

//{xx: "78", Symbol(xx): "12", Symbol(xx): "34"}xx: "78"Symbol(xx): "12"Symbol(xx): "34"__proto__: Object



var mysymbol=Symbol();
var a={};
a.mysymbol='hello';
console.log(a[mysymbol]);
console.log(a['mysymbol']);
// undefined
// hello


var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);//输出什么？如何解释Symbol
console.log(obj[myS2],obj["xx"]);
// 123 undef


var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj['s1']=678;
obj.s2=910;
for(var k in obj)
{
   console.log(k,typeof k);
}
// s1 string
// s2 string


var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}
// Set(6) {1, 2, 3, 4, 5, …}
// 2
// 3
// 5
// 4

