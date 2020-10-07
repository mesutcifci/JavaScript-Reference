"use strict"

/* creating objects */

// 1- object literals - initializer

let myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 }, // engine property is also an object with its own properties
    "can speed": true // multiword property name must be quoted
};

let key = prompt("What do you want to know about the car?", "color");
console.log(myHonda[key]); // red if enter color

console.log(myHonda["can speed"]); // true
console.log("\n");

// 2 - constructors function

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let mesut = new Person("Mesut Ç", 23, "male");
let myCar = new Car("Eagle", "Talon TSi", 1993, mesut);

for (let i in myCar) {
    console.log(`myCar.${i} = ` + myCar[i]);
}

/* 
myCar.make = Eagle 
myCar.model = Talon TSi 
myCar.year = 1993 
myCar.owner = [object Object] 
*/
console.log("\n");

// 3 - Object.create 

let Animal = {
    type: 'Invertebrates',
    displayType: function () {
        console.log(this.type);
    }
};

let animal_1 = Object.create(Animal);
animal_1.displayType(); // Invertebrates

let animal_2 = Object.create(Animal);
animal_2.type = "cat";
animal_2.displayType(); // cat

console.log("\n");

/* Computed properties */

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 'tasty' // the name of the property is taken from the variable fruit
}

console.log(bag.apple) // tasty if fruit == apple

console.log("\n");

/* Property existence test */

let testObj = {};

console.log(testObj.testProperty === undefined); // true means "no such property"
console.log("testProperty" in testObj) // false mean testPropery  doesnt exist

console.log("\n");

/* Defining Methods */

function Cat(name, sex) {
    this.name = name;
    this.sex = sex;
    this.displayInformation = displayInformation;

    this.sayMeow = function () {
        console.log("Meeeeoowww");
    };
}

function displayInformation() {
    console.log(`name = ${this.name}, sex = ${this.sex}`);
}

let myCat = new Cat("gırgır", "male");
myCat.displayInformation(); // name = gırgır, sex = male
myCat.sayMeow();            // Meeeeoowww
console.log("\n");

// method shorthand 
let city = {
    // longMethod: function long() { console.log(".......") }
    // longMethod: function () { console.log(".......") }
    longMethod: () => { console.log("......."); },
    shortMethod() { console.log(".......") },
    externalMethod: externalMethod,
};

function externalMethod() { console.log(".......") };
city.longMethod();  // .......
city.shortMethod(); // .......

console.log("\n");

/* this */

const Manager = {
    name: "Kemal",
    age: 27,
    job: "CEO"
}

const Intern = {
    name: "Mesut",
    age: 26,
    job: "Software Engineer Intern",
}

function sayHi() {
    console.log(`Hi, my name is, ${this.name}`);
}

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi();   // Hi, my name is, Kemal
Intern.sayHi();    // Hi, my name is, Mesut
console.log("\n");

let house = {
    size: "big",
    printSize() {
        console.log(house.size); // to prevent error we must use 'this'
    }
};

let smallHouse = house;
house = null;
// smallHouse.printSize(); // TypeError: house is null 

console.log("\n");

/* Getter And Setter */

let obj = {
    number: null,
    get getNumber() {
        return this.number
    },
    set setNumber(value) {
        this.number = value;
    }
}

console.log(obj.number);    // null
obj.setNumber = 5;
console.log(obj.getNumber); // 5
console.log("\n");

let obj_2 = {
    text: null
}

Object.defineProperties(obj_2, {
    "getText": { get: function () { return this.text } },
    "setText": { set: function (value) { this.text = value } },

});

console.log(obj_2.text);    // null
obj_2.setText = "abcdefg";
console.log(obj_2.getText); // abcdefg

console.log("\n");

obj_2 = {
    get name() {
        return this._name;  // we also specify different property name
    },
    set name(value) {
        if (value.length < 3) {
            console.log("This name is too short, need at least 4 characters");
            return;
        } 
       this._name = value;
    }
}

obj_2.name = ''; // This name is too short, need at least 4 characters

console.log("\n");

/* Object copying, references */

let user = {
    name: 'mesmes',
    age: 999,
};

let admin = user;       // copy the reference 
admin.name = "elif";    // changed by the admin reference 
console.log(user.name); // elif

console.log(user == admin);  // true
console.log(user === admin); // true
console.log("\n");

let a = {};
let b = {};

console.log(a == b);  // false
console.log(a === b); // false

let c = Object.create(user);
let d = Object.create(user);

console.log(c == d);  // false
console.log(c === d); // false

console.log("\n");

// Cloning and merging, Object.assign 

let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

console.log(clone.name); // elif
clone.name = "mesut";
console.log(clone.name); // mesut
console.log(user.name);  // elif

let clone_2 = {};
Object.assign(clone_2, user); // same as above

let clone_3 = Object.assign({}, user);

console.log("\n");

// Nested cloning

let hero = {
    name: "saitama",
    bio: {
        power: "infinity",
        hair: "0"
    }
}

let clone_4 = {};
clone_4.bio = hero.bio;

console.log(clone_4.bio) // Object { power: "infinity", hair: "0" }
console.log(clone_4.bio == hero.bio);  // true
console.log(clone_4.bio === hero.bio); // true
console.log("\n");

console.log(hero.bio); // Object { power: "infinity", hair: "0" }
clone_4.bio.hair = '100';
clone_4.bio.power = 0;
console.log(hero.bio); // Object { power: 0, hair: "100" }
console.log("\n");

/* return vs this */

function BigObject() {
    this.name = "this";
    return { name: "return" };
}

console.log(new BigObject().name); // return

function SmallObject() {
    this.name = "this";
    return name = "return";
}

console.log(new SmallObject().name); // this

console.log("\n");

