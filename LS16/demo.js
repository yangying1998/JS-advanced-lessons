var arr1=[2,5,8];
arr1.forEach(function(a){
console.log(a,this);
})
console.log(arr1);
// 2 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// 5 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// 8 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// (3) [2, 5, 8]

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a){
console.log(a,this);
},arr2)
console.log(arr1);
// 2 (3) [1, 6, 7]
// 5 (3) [1, 6, 7]
// 8 (3) [1, 6, 7]
// (3) [2, 5, 8]


var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){
console.log(a,i,this);
},arr2)
console.log(arr1);
// 2 0 (3) [1, 6, 7]
// 5 1 (3) [1, 6, 7]
// 8 2 (3) [1, 6, 7]
// (3) [2, 5, 8]

；
var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
arr3[i]=a>arr2[i]?a:arr2[i];
},arr2)
console.log(arr3);
// (3) [2, 6, 8]


var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);
// Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)


var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);
// Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)


var date3 = new Date("2017-08-09");//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
console.log(date3);
// Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)


var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//逆运算是date4.getTime();
//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

var date5 = new Date();//new Date(Date.now());
console.log(date5);
// Mon May 07 2018 14:33:13 GMT+0800 (中国标准时间)



var d1=new Date();
var d2=Date();
console.log(d1,typeof d1);
console.log(d2,typeof d2);
// Mon May 07 2018 14:37:00 GMT+0800 (中国标准时间) "object"
// Mon May 07 2018 14:37:00 GMT+0800 (中国标准时间) string


console.log(Date.now());
console.log((new Date()).getTime());
// 1525675199353
// 1525675199353


var today=new Date();
today.setMonth(6);
console.log(today);
//Sat Jul 07 2018 14:44:30 GMT+0800 (中国标准时间)
console.log(today.getDay());
// 6

var today =new Date();
var newdate=new Date(today.getTime()+1000*3600*24*50);
console.log(newdate);
// Tue Jun 26 2018 15:04:19 GMT+0800 (中国标准时间)












