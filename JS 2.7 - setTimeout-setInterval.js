"use strict"

// seTimeout 

function helloWorld() {
    setTimeout(() => console.log("Hello"));
    console.log("World");
}

helloWorld(); // World Hello

function printer1() {
    console.log("printer 1 executed");
}

setTimeout(printer1, 1000); // after 1 second log printer 1 executed

function printer2(param) {
    console.log(`${param} executed with parameter`);
}

setTimeout(printer2, 1001, 'printer 2')

setTimeout("console.log('Hello')", 1002); // Hello
setTimeout((x, y) => console.log('sum = ', x + y), 1003, 3, 5); // 8 

let timerId = setTimeout(() => alert("This message never shows"));
clearTimeout(timerId);

/* ------------------------------------------------------------------------------------ */

// setInterval

let number = 0;
// 0 1 2 3 4 counting stopped
let counter = setInterval(() => console.log(number++), 1000);

setTimeout(() => {
    clearInterval(counter);
    console.log('counting stopped');
}, 6000);

/* ------------------------------------------------------------------------------------ */

// the 'this' problem

const dog = {
    sound: 'woof',
    bark() {
        console.log(`Rover says ${this.sound}!`);
    }
};

dog.bark();
// Outputs: Rover says woof! because 'this' points to the dog object

setTimeout(dog.bark, 50);
// Outputs: Rover says undefined! because  'this' points to the global window object

setTimeout(dog.bark.bind(dog), 50); // now this points to the dog object
