/* const myObj = { name: "Gabriel" };

console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function () {
        return `Time for ${this.beverage.morning}`;
    }

};

console.log(anotherObj);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["alive"]);
console.log(anotherObj["beverage"]["morning"]);
console.log(anotherObj.action()); */

const vehicle = {
    wheels: 4,
    engine: () => {
        return "Vroooooom!";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); // Inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = () => "Whooooosh!";
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = () => "Shhhhhh...";
console.log(tesla.engine());
tesla.start = () => { confirm("Start?")};
/* tesla.start(); */

const { wheels, engine, doors } = truck;
console.log(wheels);
console.log(engine());
console.log(doors);