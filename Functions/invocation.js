/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 24.01.12
 */

/*
var Quo = function(string){
    this.status = string;
}

    Quo.prototype.get_status = function(anz){
        return this.status + anz;
    }


    var myQue = new Quo("confused");

console.log(myQue.get_status(1));


var status_Object = {
    status: "A-OK"
}


// 1. Parameter = Wert für 'this' 2. Parameter = Argumente der Funktion (hier get_status)
console.log(Quo.prototype.get_status.apply(status_Object,[20]));
*/



/* Invocation with as Closure */

var quo = function (status) {

    return {
        get_status:function (anz) {
            return status + anz;
        }
    }
};


var myQue = quo("confused");

console.log(myQue.get_status(1));


var status_Object = {
    status:"A-OK"
};


/* 1. Parameter = Wert für 'this'
   2. Parameter = Argumente der Funktion (hier get_status) */
console.log(myQue.get_status.call(status_Object, 20));