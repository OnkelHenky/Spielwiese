/**
 * Created by Alexander Henka on 08.07.14.
 * Copyright by Alexander Henka
 */


"use strict";


function Promise(machWas) {
    var state = 'pending';
    var value;
    var deferred;

    function resolve(newValue) {
        value = newValue;
        state = 'resolved';

        if(deferred) {
            handle(deferred);
        }
    }

    function handle(onResolved) {
        if(state === 'pending') {
            deferred = onResolved;
            return;
        }

        onResolved(value);
    }

    this.then = function(onResolved) {
        handle(onResolved);
    };

    machWas(resolve);
}


function doSomething() {
    return new Promise(function machWas(resolve) {
        var value = 42;
        resolve(value);
    });
}


doSomething().then(function a(value) {
    console.log('Got a value sm 1 :' + value);
    return value;
});




function Promise2(fn) {
    var state = 'pending';
    var value;
    var deferred = null;

    function resolve(newValue) {
        value = newValue;
        state = 'resolved';

        if(deferred) {
            handle(deferred);
        }
    }

    /*


     function resolve(newValue) {
     if(newValue && typeof newValue.then === 'function') {
             newValue.then(resolve);
            return;
     }
             state = 'resolved';
            value = newValue;

     if(deferred) {
     handle(deferred);
     }
     }
     */

    function handle(handler) {
        if(state === 'pending') {
            deferred = handler; //Warten auf das Resoven des Promise
            return;
        }

        if(!handler.onResolved) {
          /*1. Fall bei:
              return new Promise2(function(resolve) {
                var value = 42;
                resolve(value);
              });
          */
          handler.resolve(value);
          return;
        }

        var ret = handler.onResolved(value); //Returnwert des vorherigen Promise, der 'then-Methode'
        handler.resolve(ret);  /*Setzten des 'rsolved" Rückgabewertes des vorherigen Promise.
                                * Und auf Ruf an den 'Then' Hanlder des 'nächsten' bzw. aktuellen Promise*/

    }

    this.then = function(onResolved) {
        return new Promise(function(resolve) {
            handle({
                onResolved: onResolved,
                resolve: resolve
            });
        });
    };

    fn(resolve); //Hier erfolgt die Übergabe der Reference auf die Methode 'resolve' des jeweiligen Promise.
}


function doSomething2() {
    return new Promise2(function(resolve) {
        var value = 42;
        resolve(value);
    });
}




doSomething2().then(function a(value) {
    console.log('Got a value:' + value);
    return value;
}).then(function b(value) {
    console.log('Got a value in b:' + value);
});






