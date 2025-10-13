/* let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!";
}
else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers`;
}
else if (soup) {
    reply = `Here's your order of ${soup}`;
}
else {
    reply = "Sorry, we're out of soup"
}
console.log(reply); */

let testSocre = 89;
let collegeStudent = true;
let grade;

if (testSocre >= 90) {
    grade = "A";
}
else if (testSocre >= 80) {
    grade = "B";
}
else if (testSocre >= 70) {
    grade = "C";
}
else if (testSocre >= 60) {
    grade = "D";
}
else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}

console.log(grade);