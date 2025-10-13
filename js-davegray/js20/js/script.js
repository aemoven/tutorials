"use strict";

const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            /* throw new Error("This is an error!"); */
            if (i % 2 !== 0) {
                throw new Error("Odd number!");
            }
            console.log("Even number! " + i);
        }
        catch (err) {
            /* console.error(err.name);
            console.error(err.message); */
            /* console.error(err.stack); */
            console.log("Odd number! " + i);
        }
        finally {
            console.log("...finally");
            i++;
        }
    }
};

makeError();

/* function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
} */