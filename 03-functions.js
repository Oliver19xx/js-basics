'use strict'


// Function statement
// - Kann nicht innerhalb einer Funktion angelegt werden
const sum = add(1, 2); // Function statements werden am Anfang gescannt
console.log(sum);

function add(a, b) {
    return a + b;
}

// Function expression
// - Kann innerhalb einer Funktion angelegt werden

// console.log(addExpression(1, 2)); // ReferenceError: Cannot access 'addExpression' before initialization
const addExpression = (a, b) => { return a + b; };
console.log(addExpression(1, 2));