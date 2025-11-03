/* Arrays */

/* const myArray = [];

myArray[0] = "Gabriel";
myArray[1] = 1001;
myArray[2] = false;

console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

myArray.push("school");
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift("fish");
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.splice(1,1);
console.log(myArray);

delete myArray[1];
console.log(myArray);

myArray.splice(1, 1, "hi");
console.log(myArray);

myArray.splice(1, 0, "hey");
console.log(myArray); */

/* const myArray = ["A", "B", "C", "D", "E", "F"];
console.log(myArray);

myArray.reverse();
console.log(myArray);

let newArray = myArray.slice(2);
console.log(newArray);

const newString = myArray.join();
console.log(newString);
newArray = newString.split(",");
console.log(newArray); */

const myArrayA = ["A", "B", "C"]
const myArrayB = ["D", "E", "F"];

/* const newArray = myArrayA.concat(myArrayB); */
const newArray = [...myArrayA, ...myArrayB];
console.log(newArray);