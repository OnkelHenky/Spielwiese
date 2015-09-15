/**
 * Created by alex on 07.01.15.
 */

/*
 *  URL:
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
 *
 */

(function () {

    var foo = 'bar';

    console.log(foo in ['baz','bar','foobar']); //false, mann muss bei einem Array den Index angeben => 0,1,2 ...

    var mycar = {make: "Honda", model: "Accord", year: 1998};
    mycar.make = undefined;

    console.log( "make" in mycar); //true

})();