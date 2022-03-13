'use strict'

// Falsy values
// - false
// - 0
// - ''
// - undefined
// - null
const runFalsyValues = !true;
if (runFalsyValues) {
    let x = false;
    console.log(x, 'is', !!x);
    x = 0;
    console.log(x, 'is', !!x);
    x = '';
    console.log(x, 'is', !!x);
    x = undefined;
    console.log(x, 'is', !!x);
    x = null;
    console.log(x, 'is', !!x);
}
// Truthy value
const runTruesyValues = !true;
if (runTruesyValues) {
    const a = 23 || 24; // 23 ist nicht in Falsy Values enthalten => Also nicht false => Erster Wert, der nicht false ist wird zurückgegeben
    const b = false || 'b'; // 'b'
    const c = 0 || 'c'; // 'c'
    console.log(a, b, c);
    const d = 23 || 42; // => 23 Erster Wert, der den Ausdruck true werden lässt
    const e = 23 && 42; // => 42 Letzer Wert, der den Ausdruck true werden lässt
    console.log(d,e);
}