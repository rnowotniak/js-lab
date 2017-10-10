"use strict";

let rate$ = 3.94;
let amount$ = 1000;
let exchange$ = amount$ / rate$

rate$ = 66666666666666;

console.log(exchange$);


return;


function* zeroOneTwo() {
    // return 5;
    yield 0;
    yield 1;
    yield 2;
    return 15;
}

var arr = zeroOneTwo();
// console.log(typeof arr);

// console.log(arr.next());
// console.log(arr.next());
// console.log(arr.next());
// console.log(arr.next());
// console.log(arr.next());

for (var i of zeroOneTwo()) {
    console.log(i);
}

return;





var logger = {
    name: "log",
    log: function(msg) {
        console.log(`${this.name}: ${msg}`);
    }
}

Promise.resolve("akcja").then(logger.log)


return;

function hello() {
    return `I'm ${this}`
}

console.log(hello());

return 0;

// fff=3

console.log(Math.round);

function outer() {
    var a = 1;
    return function inner() {
        var b,c;
        a += 1;
        console.log(a);
    };
}

let in1 = outer();
let in2 = outer();

in1();
in2();

return 0;







(function() {
    console.log(1);
    setTimeout(function(){console.log(2);}, 1000);
    setTimeout(function(){console.log(3);}, 0);
    console.log(4);
})();
console.log(5);

return 0;










var readline = require('readline');
var fs = require('fs');
console.log('');

let a = 3;
let b = a==="3";

let imie = 'Robert';
console.log(`Hello ${imie.toUpperCase()}`);

console.log(b,typeof(b) == "boolean");

return 0;

console.log(3+3);

let fpath = "c:\\windows\\system.ini";

console.log("a\t\t\naa", 3)

//console.log(fs.readFileSync(fpath, {encoding:'utf8'}));
console.log('----');
let n=0;
fs.readFile(fpath, 'utf8', function(err,data) {
    console.log(n + ": " + data);
});
console.log( {aaaa:3})

console.log("Hello!")
console.log(3/5);

let ar1 = ['ROb', 'Nowotniak', 'foo']

console.log()

console.log(ar1.filter( (s) => s[1]=='o'))
console.log(3==="3");
console.log(typeof(3=="3"));

/*
class Klasa1 {

    static main() : number {
        console.log('lalal');
        return 0;
    }

}*/