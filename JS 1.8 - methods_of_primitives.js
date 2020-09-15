let text = "hello";

text.toUpperCase();
console.log(text); // hello

text = text.toUpperCase();
console.log(text) // HELLO

text.test = 147; // test is created
                 // test is destroyed
// console.log(test.test) // test recreated result = undefined or error 

console.log(text.test = 123); // result = 123