const myNumber = 42;

console.log(myNumber + " " + typeof myNumber);
console.log(myNumber);

const myFloat = 42.01;

console.log(myFloat + " " + typeof myFloat);
console.log(myFloat);

const myString = "42";

console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number.parseInt("122a"));
console.log(typeof Number.parseFloat("4.2375abc").toFixed(2));