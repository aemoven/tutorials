/* Ternary Operator */

/* let soup = "Chicken noodle soup";
// let response = soup ? `Yes, we have ${soup}` : "Sorry, no soup";
let isCustomoerBanned = false;
let soupAccess = isCustomoerBanned
    ? "Sorry, no soup for you!"
    : soup
        ? `Yes we have ${soup}`
        : "Sorry, no soup";
console.log(soupAccess); */

let testScore = 40;
let myGrade = testScore > 89 ? "A"
    : testScore > 79 ? "B"
        : testScore > 69 ? "C"
            : testScore > 59 ? "D"
                : "F";

console.log(`My test score is ${myGrade}`);