var arr1=[1,2,3,'4'];
var arr2=new Array(5)
;
console.log(arr2);
// (5) [empty × 5]


undefined
var arr2=new Array('5')
;
console.log(arr2);
// ["5"]



var arr=[];
arr[4]=2;
arr;
//[empty × 4, 2]


var a1=[1,2,3];
var a2=a1;
a2.length=0;
console.log(a1,a2);
// [] []


var a3=[1,2,3];
var a4=a3;
a4=[];
console.log(a3,a4);
// [1, 2, 3] []


var arr=[1,2,3];
delete arr[2];
console.log(arr);
// [1, 2, empty]

var arr=[1,2,3];
var p=arr.pop();
console.log(p);
// 3


var i=2,b=[];
b[i]=3;
b[i+1]='YY';
b[b[i]]=b[0];
console.log(b);
// [empty × 2, 3, undefined]

var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
console.log(a);
// 101
// (101) [empty, "Hi", empty × 98, 0, -1.23: true]



var arr=[];
arr[-1.23]='xx';
arr['5']='yy';
arr;
// [empty × 5, "yy", -1.23: "xx"]



var arr=[];
arr[1.23]='xx';
arr['5']='yy';
arr;
//[empty × 5, "yy", 1.23: "xx"]



function f(){console.log(arguments);}
f(1,2,3,'x');
// Arguments(4) [1, 2, 3, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]

var a2=new Array(3);
console.log(a2.length);
var a3=[,,];
console.log(a3.length);
// 3
// 2

var a1 = [,"abc"];
console.log(a1.length);

for(var i in a1){
    console.log(i,a1[i]);//输出几个元素
}
console.log(0 in a1,1 in a1);

var a2 = new Array(3);
console.log(a2.length);
console.log(a2);


// 2
// 1 abc
// false true
// 3
// (3) [empty × 3]



var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);

// (5) [Array(5), Array(5), Array(5), Array(5), Array(5)]



function foo(){
    console.log(Array.isArray(arguments));
    //console.log(arguments.pop());//这样是否能调用？数组与类数组对象
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);
//false
//5
























