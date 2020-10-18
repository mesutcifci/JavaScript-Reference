"use strict"

let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__ : animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
}

console.log(longEar.eats);  // true  ( longEar.__proto__.__proto__.eats )
console.log(longEar.jumps); // true  ( longEar.__proto__.jumps )

for (let key in longEar) {
    console.log(key); // earLength - jumps - eats - walk
}

console.log("\n");

/* ------------------------------------------------------------------------------------ */

let printer = {
    printName() {
        console.log(this.name);
    }
    
}

function User(name) {
    this.name = name;
}

User.prototype = printer;  

let user1 = new User('Mesut'); // user1.__proto__ = printer
user1.printName(); // Mesut
console.log(user1.constructor == User); // false


new User("Elif").printName(); // Elif
console.log("\n")

/* 
Test has default prototype
Test.prototype = {constructor : Test};
*/
function Test() {};
console.log(Test.prototype.constructor === Test); // true

let test = new Test();
console.log(test.constructor === Test); // true

let test2 = new test.constructor();
console.log("\n");

function Obj() {
    constructor = Obj;
}

let obj1 = new Obj();
console.log(obj1.constructor === Obj); // true
console.log("\n");

/* ------------------------------------------------------------------------------------ */

let obj2 = {};
console.log(obj2.__proto__ === Object.prototype );        // true
console.log(obj2.toString === Object.prototype.toString); // true
console.log("\n");

/* ------------------------------------------------------------------------------------ */

function A() {
    this.printer = function() {
        console.log("A");
    }
}

function B() {
    this.printer = function() {
        console.log("B");
    }
}

B.prototype = A;

let ab = new B();
ab.printer(); // B
console.log("\n");

/* ------------------------------------------------------------------------------------ */

let person = {
    name: "",
    age: undefined,
}

// create new object with person as a prototype
let mesut = Object.create(person); 
console.log(Object.getPrototypeOf(mesut) === person); // true;

let elif = {};
Object.setPrototypeOf(elif,person);
console.log(Object.getPrototypeOf(elif) === person); // true;
console.log("\n");

/* ------------------------------------------------------------------------------------ */

function City(name) {
    this.name = name;
}

let city1 = new City('Ankara');

City.func1 = function() {
    console.log('func1 executed');
}

City.prototype.func2 = function() {
    console.log('func2 executed');
}

City.func1();       // func1 executed
// City.func2();    // TypeError: City.func2 is not a function
console.log("\n");  

// city1.func1(); // city1.func1 is not a function
city1.func2();    // func2 executed
city1.population = 10000000;
console.log("\n");

let city2 = Object.create(city1);


/*​
* constructor: function City(name)
​* func2: function func2()
​* <prototype>: Object { … }
*/
console.log(city1.__proto__);
console.log("\n")

/*
* name: "Ankara"
* population: 10000000
* <prototype>: Object { func2: func2(), … }
*/
console.log(city2.__proto__);
console.log("\n");

/* ------------------------------------------------------------------------------------ */
