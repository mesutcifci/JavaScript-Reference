
function* generator1() {
    console.log('A');
    yield 1;
    yield 2;
    return 3; // X
}

// result not appear because generator functions dont run code
// instead returns Generator object
generator1();

let numbers = generator1();
console.log(numbers); // Generator {  }
console.log("\n");

// Also print 'A'
console.log(numbers.next()); // Object { value: 1, done: false }
console.log(numbers.next()); // Object { value: 2, done: false }
console.log(numbers.next()); // Object { value: 3, done: true }
console.log("\n");

let numbers2 = generator1();


// on line X value of done = true
// if done = true for..of ignores last value
for (let number of numbers2) {
    console.log(number); // A 1 2 
}
console.log("\n");

// ------------------------------------------------------------------------------------ 

function* generator2() {
    yield 1;
    yield 2;
    yield 3;
}

let numbers3 = generator2();

console.log(numbers3.next()); // Object { value: 1, done: false }
console.log(numbers3.next()); // Object { value: 2, done: false }
console.log(numbers3.next()); // Object { value: 3, done: false }
console.log("\n");

let numbers4 = generator2();

for (let number of numbers4) {
    console.log(number); // 1 2 3
}
console.log("\n");

console.log(...generator1()); // A 1 2 
console.log(...generator2()); // 1 2 3
console.log("\n");

// ------------------------------------------------------------------------------------ 

let obj = { prop1: 'property 1', prop2: 'property 2' };

obj[Symbol.iterator] = function* () {
    for (let key in this) {
        yield key
    }
}

for (let property of obj) {
    console.log(property); // prop1 prop2
}

console.log(obj[Symbol.iterator]().next()); // Object { value: "prop1", done: false }
console.log("\n");

// ------------------------------------------------------------------------------------ 

function* generator3() {
    let name = yield "default";  // X
    console.log(name); // Y
}

value = generator3();

// now the function is hanging in line X
console.log(value.next().value); // default

// set name and run line Y
value.next('Elif');  // Elif
console.log("\n");

// ------------------------------------------------------------------------------------ 

function* generator4() {
    yield console.log('A');
    yield console.log('B');
    return console.log('C');
}

let numbers5 = generator4();

numbers5.next(); // logs A
numbers5.next(); // logs B
numbers5.next(); // logs C
console.log("\n")

// ------------------------------------------------------------------------------------ 

function* generator5() {
    yield ['A', 'B', 'C'];
}

let letters = generator5();
console.log(letters.next().value); // Array(3) [ "A", "B", "C" ]
console.log("\n");

// ------------------------------------------------------------------------------------ 

function* generator6(letters) {
    for (letter of letters) {
        yield letter;
    }
}

letters = generator6(["A", "B", "C" ]);

console.log(letters.next().value); // A
console.log(letters.next().value); // B
console.log(letters.next().value); // C
console.log("\n");

// ------------------------------------------------------------------------------------ 

function* generator7(letters) {
    yield* letters;
}

letters = generator7(["A", "B", "C" ]);

console.log(letters.next().value); // A
console.log(letters.next().value); // B
console.log(letters.next().value); // C
console.log("\n");

// ------------------------------------------------------------------------------------ 

function* generator8() {
    yield 1;
    yield 'A';
    yield 2;
}

function* generator9() {
    yield 0;
    yield* generator8();
    yield 'B'
}

for(let value of generator9()) {
    console.log(value); // 0 1 A 2 B
}
console.log("\n")

// ------------------------------------------------------------------------------------ 

function* f() {
    let x = yield 1;
    console.log(x);
}

let num = f();

console.log(num.next());
num.next('A'); // logs A
console.log("\n");

// ------------------------------------------------------------------------------------ 

/*
function* ff() {
    yield* 123;
}

console.log(ff().next()); // Uncaught TypeError: 123 is not iterable

*/

function* ff() {
    yield* '123';
}
console.log(ff().next()); // Object { value: "1", done: false }

// ------------------------------------------------------------------------------------ 
