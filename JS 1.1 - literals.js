"use strict"

/* Array Literals */

let numbers  = ["one", "two"]; // length = 2

let colors = [ , "red" , , "blue"]; // length = 4;
console.log(colors[0]); // undefined
console.log(colors[1]); // red
console.log(colors[2]); // undefined
console.log(colors[3]); // blue

/* Object Literals */

let Person = {
    first_name : "Mesut",
    last_name  : "Çifci",
    languages  : {primary:"java", "secondary" : "python" },
    ""  : "empty string",
    "*" : "something"
};

console.log(Person.first_name + " " + Person.last_name); // Mesut Çifci
console.log(Person.languages.primary);                   // java
console.log(Person.languages.secondary);                 // python
console.log(Person[""]);                                 // empty string
console.log(Person["*"]);                                // something




