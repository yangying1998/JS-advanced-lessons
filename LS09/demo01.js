(function max(x,y){
	return x>y?x:y;
}(2,3));
//3

(function max(x,y){
	return x>y?x:y;
})
(2,3);
//3

true &&function(a,b){
	return a>b?a:b;
}(5,9);
//9

0 &&function(a,b){
	return a>b?a:b;
}(5,9);
//0

!function(x,y){
	return x==y?true:false;
}("5",5);
//false

!function(x,y){
	return x===y?true:false;
}("5",5);
//true

function f(){
var getNumFuncs=[];
for(var i=0;i<10;i++){
	getNumFuncs[i]=function(){
		return i;
}
}
	return getNumFuncs;
}
var tmp=f();
tmp[3]();
//10

function f(){
var getNumFuncs=[];
for(var i=0;i<10;i++){
(function(j){
	getNumFuncs[j]=function(){
		return j;
}
}(i));
}
	return getNumFuncs;
}
var tmp=f();
tmp[3]();
//3