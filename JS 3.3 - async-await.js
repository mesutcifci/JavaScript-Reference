"use strict"

/*
async function example() {
    return 'text';
}

console.log(typeof (example())); // object

// Promise { "fulfilled" }
// <state>: "fulfilled"
// <value>: "text" 

console.log(example());

example().then(
    resolve => {
        console.log(resolve); //text
    }
);
*/

/*

async function sayHello() {

    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Hello"), 3000)
    });

    let result = await promise; // wait for the promise to be resolved

    console.log(result);
}

console.log("0");

sayHello();

console.log("1");

// result = 0 1 Hello
*/

/*
async function getData() {
    return 'Data';
}


const firtProgress = ( ) => await getData().then(console.log);
firtProgress();
console.log("playing video");
*/