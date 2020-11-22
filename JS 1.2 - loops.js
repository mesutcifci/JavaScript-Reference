"use strict"

outerloop: 
for(;;) {
    let j = 1;
    while(true) {
        console.log(j);
        j++;
        if(j > 5) {
            // break; // endless loop
            break outerloop;
        }
    }
}

console.log("-------------------------------")


let colors =  ["red", "green", "blue"];
colors.foo = "hi";

for(let color in colors) {
    console.log(color); // 0 1 2 foo
}

for(let color in colors) {
    console.log(colors[color]); // red green blue hi 
}

console.log("-------------------------------")

for(let color of colors) {
    console.log(color); // red green blue
}

console.log("-------------------------------")

let Person  = {
    name: 'Mesut',
    age: '231',
}

Person.foo = "foo";

for(let i in Person) {
    console.log(`Person.${i} = ${Person[i]}`);  
    // Person.name = Mesut, Person.age = 231, Person.foo = foo
}


console.log("-------------------------------");

/*
for(let i of Person) {
    console.log(`Person.${i} = ${Person[i]}`);  // TypeError: Person is not iterable
}
*/
