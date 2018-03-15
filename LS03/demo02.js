var a1 = 100;
var b1 = 100;
console.log(a1 == b1);
console.log(a1 === b1);
//true
//true

var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);
console.log(a2 === b2);
//false
//false
var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);
console.log(a3 === b3);

b3 = new Number(200);
console.log(a3 === b3);
//true
//true
//false
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_");分割
// str.split("_",2);
// str.concat("_opq");拼接
// str.substr(4,7);
// str.substring(4,7);
// str.slice(2);切片
// str.slice(2,5);
// str.slice(-2);
// str.slice(2,-2);

// str.bold();
// str.link();
// str.fontcolor("red");
// str.fontsize(50);


Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
var n1 = 12345.6789;
console.log(n1.toFixed(2));//四舍五入，保留两位小数
console.log(n1.toPrecision(2));//返回一个字符串，以指数计数法或定点计数法来表示当前数值
console.log(n1.toString());//返回该对象的字符串表示
console.log(n1.toExponential(2));//把对象的值转换为指数计数法: 
console.log(NaN === NaN);
console.log(isNaN("12,3"));//确定一个值是否为nan
console.log(Math.floor(3.8));//返回小于参数的整数
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));//返回小于参数的最大整数
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2));//四舍五入
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));

VM65:7 12345.68
VM65:8 1.2e+4
VM65:9 12345.6789
VM65:10 1.23e+4
VM65:11 false
VM65:12 true
VM65:13 3
VM65:14 -4
VM65:15 4
VM65:16 -3
VM65:17 -3
VM65:18 -3
VM65:19 -4
undefined




//字符串比较
console.log("A" > "a");
console.log("B".localeCompare("A")); //说明比较结果的数字
console.log("A".localeCompare("A")); 
console.log("A".localeCompare("B"));
//字符串连接
var a = "abc";
var b = "def";
var c = a+b;

ar str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var arr6 = "abcdef".split("c");
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);
console.log(str13,str14);

var str15 = str13.substring(2,5);
console.log(str13,str15);