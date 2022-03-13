'use strict'

const add5 = function (n) {
    return n + 5;
}

const getAddX = function (x) {
    return function (n) { // Closures (Function aus Funktion; Hat zugriff auf lokale Variablen -> x)
        return n + x;
    }
}

const add6 = getAddX(6)

console.log(add5(3));
console.log(add6(3)); // x = 6; n = 3; => 9

const process = function (array, fn) {
    return array.map(i => fn(i));
}

let out = process([1, 2, 3], (i) => i * 2);
console.log(out);
out = [1, 2, 3].map(i => i * 2);
console.log(out);
out = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(out);
out = [1, 2, 3].filter(i => i % 2 == 1);
console.log(out);