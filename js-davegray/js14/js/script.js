/* var, let, and const */


/* var - mainly on legacy code, doesn't throw error at recreation 
    var x = 1; OK
    var x = 2; OK
*/

/* let - throw error trying to recreate the variable 
    let x = 1; OK
    let x = 2; ERROR
*/

/* const - throw error trying to reassingn value 
    const x = 1; OK
    const x = 2; ERROR
    x = 3;       ERROR
*/

/* global scope */
var x = 1;
let y = 2;
const z = 3;

/* local scope - block scope*/
/* {
    var x = 4;
    let y = 5;
    const z = 6;
} */

/* local scope - function scope */
/* function myFunc() {
    const z = 7;
} */

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;

    {
        var x = 11; // function scoped
        const z = 6; // block scoped
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

myFunc();