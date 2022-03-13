'use strict'

const add = function (a = 0, b = 0, ...rest) {
    //console.log(rest); // Array von Parametern ab Parameter 3
    //return  // wird gelesen als `return;` => undefined
    return ( // kein automatisches Semikolon
        a + b);
}
let sum = add(1, 2);
console.log(sum);
sum = add(1); // 1 + undefined = undefined
console.log(sum);
sum = add(1, 2, 3); // 3 wird übergeben aber nicht genutzt
console.log(sum);
sum = add(); // (undefined => 0) + (undefined => 0) = 0
console.log(sum);
