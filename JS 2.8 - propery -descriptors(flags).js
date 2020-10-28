"use strict"

let user = {
    name: 'Mesut',
    age: 23,
    isHappy: true,
    printInfo() {
        console.log(this.name, this.age);
    }
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// Object { value: "Mesut", writable: true, enumerable: true, configurable: true }
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(user, 'age');
// Object { value: 23, writable: true, enumerable: true, configurable: true }
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(user, 'isHappy');
// Object { value: true, writable: true, enumerable: true, configurable: true }
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(user, 'printInfo');
// { value: printInfo(),  writable: true, enumerable: true, configurable: true }
console.log(descriptor);
console.log("\n");

/* ------------------------------------------------------------------------------------ */

let obj = {};
Object.defineProperty(obj, "name", {
    value: 'Elif',
});

// Object { value: "Elif", writable: false, enumerable: false, configurable: false }
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log("\n");

/* ------------------------------------------------------------------------------------ */

let obj_2 = {
    name: 'Elif',
    age: 25,
    displayInfo() {
        console.log(this.name, this.age);
    }
};

Object.defineProperty(obj_2, 'name', {
    writable: false,
    enumerable: false
});

// obj_2.name = 'Gırgır'; // (in strict mode) Uncaught TypeError: "name" is read-only

Object.defineProperty(obj_2, 'name', {
    value: 'Minik'
});

console.log(obj_2.name); // Minik


// prints age, display info. name is ignored
for (let key in obj_2) {
    console.log(key);
}


Object.defineProperty(obj_2, 'age', {
    configurable: false,
});

obj_2.age = 30; // OK

// delete obj_2.age;  // TypeError property "age" is non-configurable and can't be deleted

/*
Object.defineProperty(obj_2, 'age', {
    enumerable: false  // TypeError: can't redefine non-configurable property "age"
})
*/

