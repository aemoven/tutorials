/* Modules */

//"use strict";

import User from "./user.js";

const me = new User("email@email.com", "Gabe");
console.log(me);
console.log(me.greeting());

import * as Guitars from "./guitars.js"

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

/* import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerpicking } from "./guitars.js";

console.log(playGuitar());
console.log(shred());
console.log(fingerpicking()); */