// Global Lexical Environments Object
// LeO = Lexical environments object

/*
LeO.phrase = <uninitilazed>  The JS engine knows that the variable exists but has no reference.
*/
let phrase;           // LeO.phrase = undefined
phrase = 'Hello';     // LeO.phrase = "Hello" 
phrase = 'Hi';        // LeO.phrase = "Hi"


function saySomething() {
    console.log(`${phrase}`);
}

/* ------------------------------------------------------------------------------------ */

function getCounter() {
    let counter = 0;
    function print() {
        console.log(counter++);
        console.log(counter++);
    }
    print();
}

getCounter(); // 0 1
getCounter(); // 0 1
getCounter(); // 0 1
console.log("\n");

let count_1 = getCounter;

count_1(); // 0 1
count_1(); // 0 1
count_1(); // 0 1
console.log("\n");

function getCounter_2() {
    let counter = 0;
    function print(){
        console.log(counter++);
    }
    return print;
}

getCounter_2(); // nothing prints


console.log(getCounter_2()); // function print()
console.log(getCounter_2()); // function print()
console.log(getCounter_2()); // function print()

let count_2 = getCounter_2(); // variable count refer to unction print

count_2(); // 0
count_2(); // 1
count_2(); // 2 // counter did not resetting because it is still hanging around inside a count_2


