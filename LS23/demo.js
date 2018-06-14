var [x,y,z,w]=['a','c','d','b'];
[x,y,z,w]=[x,w,y,z];
console.log(x,y,z,w);
// a b c d


var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
// 42 "OK" (2) [867, 5309]




var s = 'Hello world!';
s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true



var reg1=/^hello/gi;
var reg1=/\bhello/gi;
'hello world'.replace(reg1,'*');
//"* world"



var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
r1.exec(s); // ["aaa"]
r2.exec(s); // ["aaa"]
r1.exec(s); // ["aa"]
r2.exec(s); // null
//上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符。
// 这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是_aa_a。
//由于g修饰没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配必须从头部开始，所以返回null。



var s = 'aaa_aa_a';
var r1 = /_a+/g;
var r2 = /_a+/y;
console.log(r1.exec(s)); //
console.log(r2.exec(s)); //
console.log(r1.exec(s)); //
console.log(r2.exec(s)); //
//["_aa", index: 3, input: "aaa_aa_a"]
// null
// ["_a", index: 6, input: "aaa_aa_a"]
// null




isFinite(25); // true
isFinite("25"); // true
Number.isFinite(25); // true
Number.isFinite("25"); // false


