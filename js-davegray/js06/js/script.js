/**
 * Write code that will return a random letter from your name
*/

const anyName = "Gabriel";

const max = anyName.length;

const randNum = Math.floor(Math.random() * max);

console.log(anyName.charAt(randNum));