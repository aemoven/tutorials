/* Loops */

let myNumber = 0;
while (myNumber < 50) {
    myNumber += 1;
    console.log(myNumber);
}

do {
    myNumber -= 1;
    console.log(myNumber);
} while (myNumber > 0)

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let username = "Gabriel";
for (let i = 0; i < username.length; i++) {
    console.log(username.charAt(i));
}

let counter = 0;
let myLetter;
while (true) {
    if (myLetter === "b") break;
    myLetter = username[counter];
    counter++;
    console.log(myLetter);
}

