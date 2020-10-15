function Person(first, last, age, gender, interest) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interest = interest;
}

Person.prototype.greeting = function () {
    console.log(`Hi I'm  ${this.name.first}.`);
}


function Teacher(first, last, age, gender, interest, subject) {
    Person.call(this, first, last, age, gender, interest);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false,
    writable: true
});

Teacher.prototype.greeting = function () {
    let prefix;

    if (this.gender === 'male' || this.gender === 'Male' ||
        this.gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' ||
        this.gender === 'f' || this.gender === 'F') {
        prefix = 'Ms.';
    } else {
        prefix = 'Mx.';
    }

    console.log(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
};

let teacher1 = new Teacher('Elif', 'Çifci', 30, 'Female', ['Playing Ukulele', 'Painting'], 'Computer Science');
console.log("\n");

/* ------------------------------------------------------------------------------------ */

let f = function () {
    this.a = 1;
    this.b = 2;
}

let o = new f(); // {a: 1, b: 2}

f.prototype.b = 3;
f.prototype.c = 4;

// Is there an 'a' own property on o? Yes, and its value is 1.
console.log(o.a); // 1

// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited. 
// This is called Property Shadowing
console.log(o.b); // 2

// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
console.log(o.c); // 4

console.log(o.d);           // undefined
console.log(o.__proto__.b); // 3
console.log("\n");

let  ob = Object.create(o);

console.log(ob.a); // 1
console.log(ob.b); // 2
console.log(ob.c); // 4
console.log(ob.d); // undefined

console.log(ob.__proto__.b);           // 2
console.log(ob.__proto__.__proto__.b); // 3
console.log("\n");

/* ------------------------------------------------------------------------------------ */

function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
console.log("\n");

/* ------------------------------------------------------------------------------------ */

var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); 
// undefined, because d doesn't inherit from Object.prototype

/* ------------------------------------------------------------------------------------ */
