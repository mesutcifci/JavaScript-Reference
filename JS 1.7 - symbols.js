"use strict"

/* Symbols */

const myFirstSymbol = Symbol();
const foo = Symbol('description');
const foo2 = Symbol('description');

console.log(foo);             // Symbol(description);
console.log(foo.description); //  description

console.log(foo == foo2);     // false
// console.log(foo + "...."); // error

console.log("\n");

/* Global Symbols */

let globalSymbol = Symbol.for();
let globalSymbol_2 = Symbol.for();
let citizenID = Symbol.for('ssn');

console.log(globalSymbol == globalSymbol_2); // true 
console.log(globalSymbol == citizenID);      // false 
console.log("\n");

console.log(Symbol.keyFor(globalSymbol));    // undefined
console.log(Symbol.keyFor(citizenID));       // ssn
console.log(Symbol.keyFor(foo));             // undefined

console.log("\n");


/* Usage */

let sym = Symbol();

let myObj = {
    [sym]: "this is symbol",
    dummy: "dummy text"
};

console.log(myObj); // Object { dummy: "dummy text", Symbol(): "this is symbol" }

console.log(Object.getOwnPropertyNames(myObj)); // Array [ "dummy" ]
console.log(Object.keys(myObj)); // Array [ "dummy" ]

console.log(Object.getOwnPropertySymbols(myObj)); // Array [ Symbol() ]
console.log(Reflect.ownKeys(myObj)); // Array [ "dummy", Symbol() ]



const classRoom = {
    Mia: { grade: 50, gender: 'female' },
    Gilbert: { grade: 80, gender: 'male' },
    Gilbert: { grade: 58, gender: 'male' }, // owerwrite
};

// the second gilbert property is written
console.log(classRoom.Gilbert); // Object { grade: 58, gender: "male" }

for (let person in classRoom) {
    console.log(`classRoom.${person} = ${classRoom[person]}`);
}
// result =  classRoom.Mia = 50, classRoom.Gilbert = 58

const otherClassRomm = {
    [Symbol('Mia')]: { grade: 50, gender: 'female' },
    [Symbol('Gilbert')]: {grade: 80, gender: 'male'},
    [Symbol('Gilbert')]: {grade: 58, gender: 'male'}
};

let persons =  Object.getOwnPropertySymbols(otherClassRomm);
for(let i of persons) {
    console.log(i);
}

// result Symbol(Mia) Symbol(Gilbert) Symbol(Gilbert)