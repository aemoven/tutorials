/* Functions */

/* function sum(num1, num2) {
    if (num2 === undefined) return num1;
    return num1 + num2;
}

console.log(sum(2, 2)); */

/* function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("usermail@mail.com")); */

/* const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
} */

/* const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("usermail@mail.com")); */

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("gAbRiEl"));