var str='xx-xxy-xx';
var a=str.split('-');
console.log(a);
// ["xx", "xxy", "xx"]



var str='xx-x*y-xx';
var a=str.split(/[-*]/gi);
console.log(a);
//["xx", "x", "y", "xx"]


console.log('a2b3c4d'.replace(/[2-3]/,'x'));
console.log('a2b3c4d'.replace(/[2-3]/g,'x'));
// axb3c4d
// axbxc4d



'a2d5'.replace(/\d/gi,'x');//匹配数字
//"axdx"

'a2d5'.replace(/\D/gi,'x');//非数字，匹配一个非数字字符。等价于[^0-9]。
//"x2x5"


'a2d5'.replace(/\w/gi,'x');//匹配一个单字字符（字母、数字或者下划线）。
//"xxxx"

'a2d5'.replace(/\W/gi,'x');//匹配一个非单字字符。
//"a2d5"


'a2d5'.replace(/\s/gi,'x');//空格  匹配一个空白字符，包括空格、制表符、换页符和换行符。
//"a2d5"

'a2d5'.replace(/\S/gi,'x');//非空格  匹配一个非空白字符
//"xxxx"

//\b  边界
//、\B  非边界
// $  结尾  ^  开头


console.log('123123 123'.replace(/\b123/,'*'));
//*123 *



console.log(/oo/.test("moon"));
console.log(/oo\b/.test("moon"));
console.log(/oon\b/.test("moon"));
console.log(/\boo/.test("moon"));
// true
//false
// true
// false


console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));
// 0Bb0b_0aBbb0ba


console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));
// 0BbAb_0BbbAba

console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));
// 0Bb0b_0Bbb0ba

console.log("AaBbAb_AaaBbbAba".replace(/Aa(1,2)/g,0));
//AaBbAb_AaaBbbAba



console.log("NameNameName_11111".replace(/Name{3}/,"X"));
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));
// NameNameName_11111
// X_11111


"abcdefghijk".replace(/abcde|fghijk/g,"X");
//"XX"

var regExp=/a/gi;
console.log(regExp.test('ab'),regExp.lastIndex);
console.log(regExp.test('ab'),regExp.lastIndex);
console.log(regExp.test('ab'),regExp.lastIndex);
console.log(regExp.test('ab'),regExp.lastIndex);
// true 1
// false 0
// true 1
// false 0

var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 14
// ["342", "4", "2", index: 3, input: "12s342dsfsf233s"] 6
// ["233", "3", "3", index: 11, input: "12s342dsfsf233s"] 14















