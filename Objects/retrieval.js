/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 12.01.12
 */


var flight = {

    airline: "Oceanic",
    number: 815,
    departure:{
        IATA: "SYD",
        time:"2004-09-22 14:55",
        city:"Sydney"
    },
    arrival:{
        IATA:"LAX",
        time:"2004-09-23 10:42",
        city:"Los Angeles"
    }

};


myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
  return "Hello " + name + ".";
};

var a = 12

var c = {}
c.a = 12

function xx(a){
     a += 1;
   console.log('a func = ' +a);
}

function cxx(c){
    c.a += 1;
    console.dir(c);
}

xx(c.a);

console.dir(c);

console.log('c.a brfor = ');
console.dir(c);

cxx(c);

console.log('c.a outer = ');
console.dir(c);