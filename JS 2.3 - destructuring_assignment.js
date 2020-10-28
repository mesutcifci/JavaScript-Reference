"use strict"

let arr = ['kemal', 'ayhan', 'ceo'];

//shorter way to write :
//let firstName = arr[0];
//let surname = arr[1];
let [firstName, surname] = arr; // destructuring assigment 

// [first, second, third] = "123"; // gives error in strict mode
// console.log(first, second, third); // 1 2 3

let [one, two, three] = new Set([1, 2, 3]);
let user = {};
[user.name, user.surname] = arr;

console.log(firstName, surname);      // kemal ayhan
console.log(one, two, three);         // 1 2 3 
console.log(user.name, user.surname); // kemal ayhan

/* ------------------------------------------------------------------------------------ */

console.log("\n");

user = {
    name: "John",
    age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John,  age:30
}

/* ------------------------------------------------------------------------------------ */

console.log("\n");

let name_1 = "mesut";
let name_2 = "elif";

console.log(`name_1 = ${name_1}, name_2 = ${name_2}`);   // name_1 = mesut, name_2 = elif
[name_1, name_2] = [name_2, name_1];
console.log(`name_1 = ${name_1},  name_2 = ${name_2}`);  // name_1 = elif,  name_2 = mesut

/* ------------------------------------------------------------------------------------ */

console.log("\n");

[name_1 = "Guest", name_2 = "Anonymous"] = ["Julius"];
console.log(name_1);     // julius
console.log(name_2);  // Anonymous

/* ------------------------------------------------------------------------------------ */

/* Object destructuring */

console.log("\n");

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

/* ------------------------------------------------------------------------------------ */

console.log("\n");

let { he, wi, ti } = { ti: "Title", he: 500, wi: 500 };

console.log(ti);      // Title
console.log(he);      // 500
console.log(width);   // 500

/* ------------------------------------------------------------------------------------ */

console.log("\n");

options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { width: w, height: h, title: t } = options;

console.log(w); // 100
console.log(h); // 200 
console.log(t); // Menu

/* ------------------------------------------------------------------------------------ */

console.log("\n");

let obj = {
    prop_1: 'prop 1',
    prop_2: 'prop_2',
    prop_3: 'prop 3',
    prop_4: 'prop_4',
    prop_5: 'prop_5',
};

let { prop_1, ...rest } = obj;

// firstProp = prop 1, rest.prop_4 = prop_4
console.log(`firstProp = ${prop_1}, rest.prop_4 = ${rest.prop_4}`);

console.log(typeof(prop_1), typeof(rest)); // string object

/* ------------------------------------------------------------------------------------ */

console.log("\n");

obj = {
    a: 1,
    b: 2,
};

// {a, b} = obj; error we must use 'let'
// ({ a, b } = obj); // it's OK(in non-strict mode).

options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

let item1, item2;

({
    size: {
        width,
        height
    },
    items: [item1, item2],
    title = "Menu" // not present in the object (default value is used)
} = options);

// width = 100, height = 200, item1 = Cake, item2 = Donut
console.log(`width = ${width}, height = ${height}, item1 = ${item1}, item2 = ${item2}, \
title = ${title}`)

/* ------------------------------------------------------------------------------------ */

console.log("\n");

user = {
    id: '754671',
    fullname: 'Mesut Çifci',
    age: '23',
    gender: 'male',
    salary: '99999',
};

function showUserInfo(
    { id = '0', fullname = 'John/Jane Doe', age = '0', gender = undefined, salary = '0' } = {}
){
    console.log(`id = ${id}, fullname = ${fullname}, age = ${age} \
gender = ${gender}, salary = ${salary}`);
};


// id = 754671, fullname = Mesut Çifci, age = 23 gender = male, salary = 99999
showUserInfo(user);

// id = 0, fullname = John/Jane Doe, age = 0 gender = undefined, salary = 0
showUserInfo();

/* ------------------------------------------------------------------------------------ */


