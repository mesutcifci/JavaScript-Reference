"use strict"

console.log("*** Class Definitions ***")
console.log("\n");

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    printInfo() {
        console.log(`name = ${this.name}, age = ${this.age}`);
    }
}

let user_1 = new User('Mesut', 23);

console.log(user_1.name) // Mesut
user_1.printInfo();      // Mesut 23

console.log("\n");

console.log(typeof User);   // function
console.log(typeof user_1); // object

console.log("\n");

console.log(User); // class User { constructor(name, age) }
console.log(User.prototype.constructor == User);          // true
console.log(Object.getOwnPropertyNames(User.prototype));  // Array [ "constructor", "printInfo" ]
console.log("\n");

/* ------------------------------------------------------------------------------------ */

console.log("*** Class Expressions ***");
console.log("\n");

let Obj = class {
    sayHi() {
        console.log("Hi");
    }
}

let Obj2 = class MyObj {
    sayHi() {
        console.log("Hi")
    }
}

new Obj2().sayHi();   // Hi
// console.log(MyObj) // MyObj name isn't visible outside of the class

function makeClass() {
    return class {
        constructor(id) {
            this.id = id;
        }
        printId() {
            console.log(id);
        }
    }
}

let Product = makeClass();
let product_1 = new Product("23781");
console.log(product_1.id); // 23781
console.log("\n");

/* ------------------------------------------------------------------------------------ */

console.log("*** Extends ***");
console.log("\n");

class Animal {
    voice = "default";
    constructor(name) {
        this.speed = 0
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${speed}.`)
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stops`);
    }
}

let animal = new Animal("My animal");


class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides`)
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

console.log("\n");

/* ------------------------------------------------------------------------------------ */

console.log("*** Overriding Methods ***");
console.log("\n");

class Cat extends Animal {
    run(speed) {
        super.run(speed);
        console.log('i am inside in cat class')
    }
}

let minik = new Cat("minik");

// minik runs with speed 10.
// i am inside in cat class
minik.run(10);
console.log(minik.speed); // 10

console.log("\n");

/* ------------------------------------------------------------------------------------ */

console.log("*** Overriding Constructors ***");
console.log("\n");

class Dog extends Animal {

    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

let dog = new Dog("karabaş", 4);

console.log(dog.name);  // karabaş
console.log("\n");

/* ------------------------------------------------------------------------------------ */

class A {
    field = "A";
    constructor() {
        console.log(this.field)
    }
}

class B extends A {
    field = "B";
}

class C extends A {
    field = "C";
    constructor() {
        super();
        console.log(this.field);
    }
}

new A(); // A
new B(); // A 
console.log(new B().field); // A B
new C(); // C
console.log("\n");

/* ------------------------------------------------------------------------------------ */

console.log("Static");
console.log("\n");

class D {
    nonStaticMethod() {
        console.log(this);
    }

    static staticMethod() {
        console.log(this);
    }

}

D.externalStaticMethod = function () {
    console.log(this);
}

// D.nonStaticMethod();   // TypeError: D.nonStaticMethod is not a function
D.staticMethod();         // class D {}
D.externalStaticMethod(); // class D {}

// new D().staticMethod(); // TypeError: (new D()).staticMethod is not a function
new D().nonStaticMethod(); // Object {  }

class CoffeeMachine {
    // ...

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

}

/* ------------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------------ */







/*
function f(phrase) {
    return class {
      sayHi() { alert(phrase) }
    }
  }

  class Hello extends f("Hello") {}

  new Hello().sayHi(); // Hello
*/