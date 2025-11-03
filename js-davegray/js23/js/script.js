/* Web Storage API */

/* window.alert("Ok!");
alert("Ok!"); */

/* window.alert(window.location);
alert(location); */

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Gabe",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name)
    }
};

/* sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);
 */

/* sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData); */

localStorage.setItem("myLocalStore", JSON.stringify(myObject));
const key = localStorage.key(0);
const storeLength = localStorage.length;
const mySessionData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(key, mySessionData, storeLength);

localStorage.removeItem("myLocalStore");
localStorage.clear();
sessionStorage.clear();