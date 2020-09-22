/* Array Literals */

var numbers  = ["one", "two"]; // length = 2

var colors = [ , "red" , , "blue"]; // length = 4;
console.log(colors[0]); // undefined
console.log(colors[1]); // red
console.log(colors[2]); // undefined
console.log(colors[3]); // blue

/* Object Literals */

var Person = {
    first_name : "Mesut",
    last_name  : "Çifci",
    languages  : {primary:"java", "secondary" : "python" },
    ""  : "empty string",
    "*" : "something"
};

console.log(Person.first_name + " " + Person.last_name);
console.log(Person.languages.primary);
console.log(Person.languages.secondary);
console.log(Person[""]);
console.log(Person["*"]);




