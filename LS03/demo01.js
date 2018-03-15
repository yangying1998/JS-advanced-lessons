Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));
console.log(NaN === NaN);
console.log(isNaN("12,3"));
console.log(Math.floor(3.8));
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2));
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
console.log("B".localeCompare("A")); 
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