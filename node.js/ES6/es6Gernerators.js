/**
 * Created by Alexander Henka on 11.07.14.
 * Copyright by Alexander Henka
 */


(function scope() {



"use strict";

function*  foo(x) {
    while(true) {
        var x = x * 2;
        yield x;
    }
}

function*  bar(x) {
    x++;
    var y = yield x;
    yield y/2;
}

var g = bar(1);
console.log(g.next().value); // -> 2
console.dir(g.next(0)); // -> 4
console.dir(g.next()); // -> 4


var g = foo(2);
console.log(g.next().value); // -> 4
console.log(g.next().value); // -> 8
console.log(g.next().value); // -> 16


function*  fooBar() {
    var y = yield function yieldThisD() {
        console.log('Before Yield');
    };
    y();
}

function v(){
    console.log('YATTATATAT');
}

var fooBarGen = fooBar();
var func = fooBarGen.next();
func.value();

fooBarGen.next(function yieldThis() {
    console.log('Yielded');
});

})();


function getSomething(){
    return 20;
}

function doSomethingElse(x){
    console.log('Done something, x = ' + x);
    return 'gagag';
}

console.log('+++++++++++++++++++++');

function*  fork() {
    var y = yield getSomething();
    var yy = yield doSomethingElse(y);
    console.log('YY in function = '+ (yy+1));
    if( 58 === (yy+1)){
        console.log('YY =  58 ');
    }else{
        console.log('YY = ' + (yield getSomething()));
    }

            //yield getSomething();

}

var r = fork();

var tt = r.next().value;
console.log(tt);
if(tt < 25){

    var ff =  r.next('Whoops String');
    console.log('ff = '+ff.value);
    console.dir(r.next(20));

}else{
    r.next((tt - 10));
}

//r.next().value;
if(r.next('ddsd').done){
    console.log('DONE');
}else{
    console.log('NOT DONE');
}



