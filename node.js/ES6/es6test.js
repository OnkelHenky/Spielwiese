/**
 * Created by Alexander Henka on 07.07.14.
 * Copyright by Alexander Henka
 */

"use strict";

function es6stuff () {
//Usage of ES6 requires the use of strict mode, because it relays on it.
//ES6 support must be enabled in order to run this file.
// Node.js needs to be start with the '--harmony' argument.
//See: http://stackoverflow.com/questions/17253509/what-is-extended-mode

var f = 2;

   {
        let x = 3;
        console.log('x + f = ' + (x+f));
    }

   //  console.log('x = ' + x);
}

es6stuff();

function es6loopStuff(){

  //  console.log('i before loop = '+i);
  //  console.log('j before loop = '+j);

    /*Version I: Using block and 'let'*/
    for (var i = 1; i<=5; i++){
       // { //START Loop Scope
            let j = i;
            setTimeout(function timer() {
                console.log(j);
            }, i * 1000);
      //  } //END Loop Scope
    }
    /*Version II:  Using IIFE (Immediately invoked function expression)*/
    for (var i = 1; i<=5; i++){
         (function loopScope(i) {
            setTimeout(function timer() {
                console.log(i);
            }, i * 1000);
        })(i);
    }
}


es6loopStuff();

