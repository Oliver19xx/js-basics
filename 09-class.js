'use strict'


const Dog = function (name) {
    this.name = name;
    this.bark = function () {
        console.log('Wau wau!');
    }
}

// 'new' übergibt automagisch ein Objekt, welches innerhalb der Funktion verwendet werden kann.
const dog1 = new Dog('Alice');

// Im strict mode ist 'this' in Funktionen undefined,
// wenn kein Objekt übergeben (die Funktion mit new aufgerufen) wird.
//const dog2 = dog('Alice'); // Error: Cannot set properties of undefined (setting 'name')

console.log(dog1);

// Keine richtige Klasse nur syntaktischer Zucker
class Dog2 {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log('Wau wau!');
    }
}
const dog2 = new Dog2('Alice');
console.log(dog2);

console.log(typeof Dog, typeof Dog2); // => function, function