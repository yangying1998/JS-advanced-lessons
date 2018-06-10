var temp=new Date();
function f(){
console.log(temp);
if(false)
{let='hi';}}
f();
// Thu Jun 07 2018 08:08:58 GMT+0800 (中国标准时间)



// 暂存区锁死特性
var temp=new Date();
function f(){
console.log(temp);
//if(false){
let temp='hi';
//}
}
f();
//报错  Uncaught ReferenceError: temp is not defined  




var [foo2]=[];
var [bar2,foo2]=[1];
console.log(foo2,foo2);
// undefined undefined


//var [a,b]=[1,2];
var a=[1],b=[2];
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);
// [1] [2]
// [2] [1]


[x3, y3 = 'b'] = ['a']; 
[x4, y4 = 'b'] = ['a',undefined]; 
console.log(x3,y3);
console.log(x4,y4);
// a b
// a b


[x3, y3 = 'b'] = ['a']; 
[x4, y4 = 'b'] = ['a',null]; 
console.log(x3,y3);
console.log(x4,y4);
// a b
// a null


function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);
// 1

function f2() {
    return 2;
}
let [x7 = f2()] = [];
console.log(x7);
//2



let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1,n1,m2,n2,m3,n3);

// 1 1 2 2 1 2



let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false or true
// false
console.log(a);
console.log(b);
// [2, 3, 4]
// [2, 3, 4]


let a=[];
let b=[1,2,3,4,5];
[a[0], ,a[1], ,a[2]]=b;
console.log(a);
console.log(b);
// (3) [1, 3, 5]
// (5) [1, 2, 3, 4, 5]


let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj1;
console.log(f,l);//注意和下边写法的区别
// hello world


var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World //若上边改为var { p: [x, { y:z }] } = obj2;还能输出y么？
//思考console.log(p);是正常输出还是报错？
//Hello
//World















