'use strict'

// # 1. Typen
// ## 1.1 number
{
    let x = 42; // Number ist immer double
    let pi = 3.1415;
    let result = 23 / 0; // Divis durch 0 = Infinity
}

// ## 1.2 string
{
    let text = 'Hallo Welt!';
    text = "Hallo Welt!";
    let world = 'Welt';
    text = `Hallo ${world}!`; // inline variable
}

// ## 1.3 boolean
{
    let isSunny = true;
    let isRainy = false;
}

// ## 1..4 undefined
{
    let x = undefined;
}

// ## Typeof
{
    let type = typeof 1; // number
    type = typeof true; // boolean
    type = typeof undefined; // undefined
    type = typeof null; // object
}

// Wertetypen (Stack): number, boolean, undefined, null
// Referenztypen (Heap): string (immutable)
{
    let a = 42 == 42; // true
    let b = "Hallo" == "Hallo"; // false? => Nein,true (Sonderfall bei string eigentlich false)
    let c = 0 == '0'; // true => 0 -> '0' => '0' == '0' => true
    let d = 0 == ''; // true => valueof '' = 0
    let e = 0 === ''; // false => number != string (Typsicher)
}

// # Variablen
{
    {
        global = 'globale variable'; // globale Variable
        let local = 'locale variable'; // locale Variable
    }
    global; // 'globale variable'
    //local; // ReferenceError
    console.log(global);

    let v1 = 1; // local + veränderlich
    const v2 = 2; // local + unveränderlich
    v1 = 11; // OK
    // v2 = 22; // TypeError: Assignment to constant variable.
}