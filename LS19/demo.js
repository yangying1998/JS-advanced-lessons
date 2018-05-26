var obj1={a:[{x:1,y:[12,6,{t:true}]},'false'],b:34};
var json1=JSON.stringify(obj1);
console.log(obj1);
console.log(json1);

// {a: Array(2), b: 34}
// {"a":[{"x":1,"y":[12,6,{"t":true}]},"false"],"b":34}


var o1 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
    d:5,
    e:{name:"Jack"},
    f:function(){console.log(12);}, //注意函数序列化问题
    h:0x12
};
var jsonStr1 = JSON.stringify(o1);
console.log(jsonStr1);
console.log(o1);
// {"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"},"h":18}
// {a: Array(2), b: true, c: Array(4), d: 5, e: {…}, …}





var a1 = [1,"x",true,{y:2,z:3}];
var jsonStrArr1 = JSON.stringify(a1);
console.log(jsonStrArr1);
console.log(a1);
// [1,"x",true,{"y":2,"z":3}]
// (4) [1, "x", true, {…}]


var o2 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};
//replacer 节点转换函数，在值被转为字符串之前转换树节点的值
var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    if(key === "a"){
        console.log("find key a");
        value = 12345;
    }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    return value;
});
console.log(jsonStr2);
console.log(o2);
// find key a
// find key z
// {"a":12345,"b":false,"c":["Hi",4,"x",{"y":34,"z":"zzz"}]}
// {a: Array(2), b: true, c: Array(4)}