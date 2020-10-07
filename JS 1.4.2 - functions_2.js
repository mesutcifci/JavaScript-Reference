"use strict"

// Named function expressions

let sayHi = function func(who) {
    if (who) {
        console.log(` Hello ${who}`);
    } else {
        func('Guest') // func re-call itself
    }
}


let sayBye = function (who) {
    if (who) {
        console.log(`Bye ${who}`);
    } else {
        sayBye('Guest');
    }
}

// func(); ReferenceError: func is not defined

let welcome = sayHi;
sayHi = null;
welcome(); // Hello Guest

let bye = sayBye;
sayBye = null;
// bye(); // Uncaught TypeError: sayBye is not a function

/* ------------------------------------------------------------------------------------ */

// The "new Function" syntax

let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2)); // 3

let printName = new Function('console.log("My name is Mesut")');
printName(); // My name is Mesut


console.log("\n");
console.log("***************************************************");
console.log("*                    length                       *");
console.log("***************************************************");
console.log("\n");


console.log(Function.length);                     // 1 funciton constructor includes Function object
console.log((function () { }).length);            // 0
console.log((function (a, b) { }).length);        // 2
console.log((function (...args) { }).length);     // 0
console.log((function (a = 1, b, c) { }).length); // 0
console.log((function (a, b = 1, c) { }).length); // 1
console.log(((x, y) => { }).length);              // 2


console.log("\n");
console.log("***************************************************");
console.log("*                     name                        *");
console.log("***************************************************");
console.log("\n");


function function1() { };
let function2 = new Function();
let function3 = function () { };

console.log(function1.name); // function1
console.log(function2.name); // anonymous
console.log(function3.name); // function3
console.log("\n")


let obj = {
    function4() { },
    function5: function () { },
    method: function function6() { },
};

console.log(obj.function4.name); // function4
console.log(obj.function5.name); // function5
console.log(obj.method.name);    // function6
console.log("\n")

console.log((new Function).name);    // anonymous 
console.log((() => { }).name);       // <empty string>
console.log((function () { }).name); // <empty string>
console.log("\n");

let o = {
    get foo() { },
    set foo(x) { }
};

let descriptor = Object.getOwnPropertyDescriptor(o, "foo");
console.log(descriptor.get.name); // "get foo" 
console.log(descriptor.set.name); // "set foo" 
console.log("\n");


function Foo(name) {
    this.name = name;

}

let fooInstance = new Foo('mesut');
console.log(fooInstance.constructor.name);  // Foo
console.log(fooInstance.name);              // mesut
console.log("\n");


let sym1 = Symbol("foo");
let sym2 = Symbol();
o = {
    [sym1]: function () { },
    [sym2]: function () { }
};

console.log(o[sym1].name); // "[foo]"
console.log(o[sym2].name); // <empty string>


console.log("\n");
console.log("***************************************************");
console.log("*                  apply-bind-call                *");
console.log("***************************************************");
console.log("\n");


const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); // ["a", "b", 0, 1, 2]
console.log("\n");


function printInfo() {
    console.log(`first name = ${this.firstName}, last name = ${this.lastName}`);
}

let person = {
    firstName: 'elif',
    lastName: 'bat'
}



// first name = elif
// last name = bat
printInfo.apply(person); // 'apply' calls printInfo immediately
printInfo.call(person);  // 'call' calls printInfo immediately
let bound = printInfo.bind(person);  // 'bind' returns instead of calling printinfo
bound();

console.log("\n");


let module = {
    x: 81,
    getX: function () { console.log(this.x); }
};

module.getX(); // 81

let var1 = module.getX;
// var1();  undefined(in non-strict mode) / Type error(in strick mode)
var1.apply(module); // 81


let var2 = module.getX;
var2.call(module);  // 81

// var1(); // undefined(in non-strict mode) / Type error(in strict mode)
// var2(); // undefined(in non-strict mode) / Type error(in strict mode)

let var3 = module.getX.bind(module);
var3(); // 81

console.log("\n");

function getCount(a, b, c) {
    console.log(this.count + a + b + c);
}

var obj1 = {count: 10};

// getCount(obj1, 10, 10, 10);               // TypeError: this is undefined
getCount.call(obj1, 10, 10, 10);             // 40
getCount.apply(obj1, [100, 100, 100]);       // 310
sum = getCount.bind(obj1, 1000, 1000, 1000); 
sum();                                       // 3010

console.log("\n");


let divide = function (a, b) {
    return b / a;
};

let divide2 = divide.bind(null, 2);
console.log(divide2(10)); // 5

console.log("\n");

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

/*
name = döner
price = 10
category = food
*/
let kebap = new Food('döner', 10);
for(let key in kebap) {
    console.log(`${key} = ${kebap[key]}`);
}


console.log("\n");
console.log("***************************************************");
console.log("*                   toString                      *");
console.log("***************************************************");
console.log("\n");


function example() {
    let name = 'gırgır';
    console.log(name);
    //dsadasdasdasd
    return name
}

/*function example() {
    let name = 'gırgır';
    console.log(name);
    //dsadasdasdasd
    return name
}
*/
console.log(example.toString());
