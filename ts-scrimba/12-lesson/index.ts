type Adress = {
    street: string;
    city: string;
    country: string;
};

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address?: Adress;
};

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
};

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
};

let people: Person[] = [person1, person2];

/* let people: Array<Person> = [person1, person2]; Generics topic*/
