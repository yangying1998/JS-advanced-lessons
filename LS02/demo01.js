var str="abc-def-ghi-jkl-mn";
console.log("abc\ndefghi\\\n\'mn\'");
console.log(str.split("-"));
VM245:2 abc
defghi\
'mn'
VM245:3 (5) ["abc", "def", "ghi", "jkl", "mn"]
undefined
var str="abc-def-ghi-jkl-mn";
console.log(str.split("-",2));
console.log(str.concat("-opq"));
console.log(str.substr(4,7));
console.log(str.substring(4,7));
console.log(str.slice(2));
console.log(str.slice(2,5));
console.log(str.slice(2,-2));
console.log(str.slice(-2));
console.log(str.bold());
console.log(str.link());
console.log(str.fontcolor("red"));
console.log(str.fontsize(50));
VM549:2 (2) ["abc", "def"]
VM549:3 abc-def-ghi-jkl-mn-opq
VM549:4 def-ghi
VM549:5 def
VM549:6 c-def-ghi-jkl-mn
VM549:7 c-d
VM549:8 c-def-ghi-jkl-
VM549:9 mn
VM549:10 <b>abc-def-ghi-jkl-mn</b>
VM549:11 <a href="undefined">abc-def-ghi-jkl-mn</a>
VM549:12 <font color="red">abc-def-ghi-jkl-mn</font>
VM549:13 <font size="50">abc-def-ghi-jkl-mn</font>
undefined