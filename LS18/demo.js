try{
    var a=new Array(-5);
}
catch(e){
    console.log(e);
}
// RangeError: Invalid array length
  //  at <anonymous>:2:11


  try{
    var a=new Array(-5);
    console.log('xx');
}
catch(e){
    console.log(e);
}
finally{
    console.log('finally');
}
// RangeError: Invalid array length
  //  at <anonymous>:2:11
// finally



try{
    throw 'abc';
}
catch(e){
    console.log(e);
}
// abc


try{
    try{
     throw 'oops';
 }
 catch(ex){console.warn('inner',ex);throw ex}
 finally{console.log('finally');}
}
catch(ex){ console.warn('outer',ex);}
//inner oops
(anonymous) @ VM298:5
// finally
// outer oops



try {
    function abc (x,cb){
     console.log(x);
      cb();
 }
}
catch(e){console.log(e);}
abc('xx',function(){
    var arr=new Array(-1);
})
// xx
// Uncaught RangeError: Invalid array length
  //  at <anonymous>:9:13
    //at abc (<anonymous>:4:7)
   // at <anonymous>:8:1



   try {
    function Circle(){};
    var a= new  Circle();
}catch(e){
    console.log(e.name,e.message);
}
//ƒ Circle(){}


try
{
    var x = y;// 没有定义y所以产生错误。如果有y的话，不会抛异常错误
    //console.log("x") = 23;//赋值引用错误，在chorme中测试
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");//有无异常该句都会执行
}


//ReferenceError y is not defined
// finally