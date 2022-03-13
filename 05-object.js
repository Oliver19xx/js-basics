'use strict';

// Object hier => Dictionary

const company = {
    name: 'the native web',
    location: 'Riegel am Kaiserstuhl',
    foundedIn: 2012,
    fullName() { return `${this.name} GmbH` }
};

console.log(company.name); // => 'the native web'
console.log(company['name']); // => 'the native web'
console.log(company.Name); // => undefined

company.country = 'germany';
console.log(company);

let person = {}; // leeres Objekt
person = null; // kein Objekt

