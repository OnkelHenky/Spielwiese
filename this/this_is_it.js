/**
 * Created by alex on 17.11.15.
 */



var  a = 2;

function foo(a){

    console.log(a +1);


//    var _a = 4 ;

}


function foo(a,b){

    console.log('b = ' + b);

    console.log(a +b+1);


//    var _a = 4 ;

}


var obj = {
    a : 33,
    foo: foo
};


var myObj = function(f){

    var foo = f || "default";

    console.log('sdsdd' +foo);


};



new myObj("hjhhjhj");


obj.foo();

//foo(1);