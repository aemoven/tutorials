export default class User {
    #id;
    #name;
    constructor(email, name) {
        this.#id = email;
        this.#name = name;
    }

    greeting() {
        return `Hi, my name is ${this.#name}, my email is ${this.#id}.`;
    }
}