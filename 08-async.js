'use strict'

setTimeout(
    () => {
        console.log('A2 - fertig');
    },
    1_000
);

console.log('A1 - direkt');

// ------

const sleep = async function () { }

const sayHello = async function () {
    // await => warte auf beendigung von sleep
    // async vor functionwird pflicht
    await sleep();
    console.log("B1 - Hallo Welt!");
}

// Top-Lvel await (aktuell noch sehr neu und nicht überall nutzbar)
//await sayHello();
sayHello().then(()=>console.log('B2 - fertig')).catch(console.log)