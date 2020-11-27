"use strict"

console.log("\n");
console.log("***************************************************");
console.log("*                 constructor                     *");
console.log("***************************************************");
console.log("\n");

let o1 = {};

/*
o1.constructorfunction Object() {
    [native code]
}
*/
console.log("o1.constructor = " + o1.constructor); 
console.log("\n");

console.log(o1.constructor);
console.log("\n");


o1 = [];

/*
o1.constructorfunction Array() {
    [native code]
}
*/
console.log("o1.constructor = " + o1.constructor);
console.log("\n");

console.log(o1.constructor);  // function Array()
console.log("\n");


function O() { }
o1 = new O();

// o1.constructor = function O() {}
console.log("o1.constructor = " + o1.constructor);  
console.log("\n");

console.log(o1.constructor);  // function O()
console.log("\n");


let o2 = new o1.constructor();

// o2.constructor = function O() { }
console.log("o2.constructor = " + o2.constructor); 
console.log("\n");

console.log(o2.constructor);  // function Object()
console.log("\n");


function O3() {};

let o4 = new O3();
let o5 = new o4.constructor();

console.log("\n");
console.log("***************************************************");
console.log("*                    assing                       *");
console.log("***************************************************");
console.log("\n");

let target = { a: 1, b: 2 };
let source1 = { c: 3, d: 4 };
let source2 = { e: { f: 5 } };

let returnedTarget = Object.assign(target, source1, source2);
let returnedTarged2 = Object.assign({}, returnedTarget);

console.log(target);          // Object { a: 1, b: 2, c: 3, d: 4, e: {…} }
console.log(returnedTarget);  // Object { a: 1, b: 2, c: 3, d: 4, e: {…} }
console.log(returnedTarged2); // Object { a: 1, b: 2, c: 3, d: 4, e: {…} }
console.log("\n");

source1.c = 33;

console.log(target.c);          // 3
console.log(returnedTarget.c);  // 3
console.log(returnedTarged2.c); // 3
console.log("\n")

source2.e.f = 55;

console.log(target.e);          // 55
console.log(returnedTarget.e);  // 55
console.log(returnedTarged2.e); // 55
console.log("\n");

// Deep Clone
target = { a: { b: 1 } };
source1 = JSON.parse(JSON.stringify(target));
target.a.b = 55;

console.log(target.a.b);   // 55
console.log(source1.a.b);  // 1
console.log("\n");


/* ------------------------------------------------------------------------------------ */

o1 = { a: 1, b: 1, c: 1 };
o2 = { b: 2, c: 2 };
let o3 = { c: 3 };

let obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log("\n");

/* ------------------------------------------------------------------------------------ */

function A(a) {
    this.a = a;
    this.b = 10;
}

A.prototype.c = 11;
Object.defineProperty(A, 'd', {
    value: 20,
    enumerable: false
});

let a1 = new A(5);

/*
{…}
 a: 5
 b: 10
<prototype>: {…}
​​  c: 11
​​  constructor: function A(a)​​
    d: 20
    ...
  <prototype>: Object { … }
*/
console.log(a1);
console.log("\n");


let a2 = Object.assign(a1, A);

/*
{…}
 a: 5
 b: 10
<prototype>: {…}
​​  c: 11
​​  constructor: function A(a)​​
    d: 20
    ...
  <prototype>: Object { … }
*/
console.log(a2);
console.log("\n");


// a b c
for(let property in a2) {
    console.log(property);
}
console.log("\n");

let a3 = new A(5);
let a4 = Object.assign({}, a3);

/*
{…}
a: 5
b: 10
<prototype>: {…}
   __defineGetter__: function __defineGetter__()
​   ...
*/
console.log(a4); 
console.log("\n");

// a b 
for(let property in a4) {
    console.log(property);
}


console.log("\n");
console.log("***************************************************");
console.log("*                    create                       *");
console.log("***************************************************");
console.log("\n");

obj = {
    prop: "prop"
};

let obj2 = Object.create(obj);

/*
{}
  <prototype>: Object { prop: "prop" }
 */
console.log(obj2);

let obj3 = Object.create(obj, {
    number: {
        value: 5
    }
});

/*
{…}
  number: 5
  <prototype>: Object { prop: "prop" }
*/
console.log(obj3);
console.log("\n");

/* ------------------------------------------------------------------------------------ */

function B(value) {
    this.value = value;
};
B.prototype.saySomething = function () { console.log(this.value) };

function C(value1, value2) {
    B.call(this, value1);
    this.value2 = value2;
}

C.prototype = Object.create(B.prototype);
C.prototype.constructor = C;
let c1 = new C(1, 2);

/*
console.log("\n");
console.log("***************************************************");
console.log("*           defineProperties/property             *");
console.log("***************************************************");
console.log("\n");
*/

let object1 = {};

Object.defineProperties(object1, {
    prop1: {
        value: 42,
        writable: true,
    },
    property2: {}
});

let object2 = {};

Object.defineProperty(object2, 'prop1', {
    value: "prop1",
    writable: true
});

console.log("\n");
console.log("***************************************************");
console.log("*           getOwnPropertyDescriptor/s              *");
console.log("***************************************************");
console.log("\n");

object1 = {
    prop1: 1,
    prop2: 2,
}

let descriptor = Object.getOwnPropertyDescriptor(object1, 'prop1');

// Object { value: 1, writable: true, enumerable: true, configurable: true }
console.log(descriptor);

let descriptors = Object.getOwnPropertyDescriptors(object1);

/*
{…}
prop1: Object { value: 1, writable: true, enumerable: true, … }
prop2: Object { value: 2, writable: true, enumerable: true, … }
<prototype>: {…}
*/
console.log(descriptors);


console.log("\n");
console.log("***************************************************");
console.log("*              keys - values - entries            *");
console.log("***************************************************");
console.log("\n");

function Person(name) {
    this.name = name;
    this.age = 20
    this.print = function () {
        console.log(`${this.name} ${this.age}`);
    };
}

Person.prototype.sayHi = function () { console.log("Hi") };

let person1 = new Person("mesut");

console.log(JSON.stringify(Object.keys(person1)));    // ["name","age","print"]
console.log(JSON.stringify(Object.values(person1)));  // ["mesut",20,null]

// [["name","mesut"],["age",20],["print",null]]
console.log(JSON.stringify(Object.entries(person1)));

// Note non-enumarable properties dont show

console.log("\n");
console.log("***************************************************");
console.log("*             getOwnPropertyNames                 *");
console.log("***************************************************");
console.log("\n");

// Array(3) [ "name", "age", "print" ]
console.log(Object.getOwnPropertyNames(person1));

// Note non-enumarable properties will show

console.log("\n");
console.log("***************************************************");
console.log("*           getOwnPropertySymbols                 *");
console.log("***************************************************");
console.log("\n");

obj = {
    [Symbol('a')]: 'a',
    [Symbol.for('b')]: 'b',
    c: 'c',
}

// Array [ Symbol(a), Symbol(b) ]
console.log(Object.getOwnPropertySymbols(obj));

console.log("\n");
console.log("***************************************************");
console.log("*                 fromEntries                     *");
console.log("***************************************************");
console.log("\n");

let entries = new Map([
    ['foo', 'bar'],
    ['bool', true]
]);

obj = Object.fromEntries(entries);
console.log(obj); // Object { foo: "bar", bool: true }
console.log(new Map(Object.entries(obj))); // Map { foo → "bar", bool → true }
console.log("\n");

obj = Object.fromEntries([[0, 'red'], [1, 'green'], [2, 'blue']]);
console.log(obj); // Object { 0: "red", 1: "green", 2: "blue" }


console.log("\n");
console.log("***************************************************");
console.log("*                freeze - isFrozen                *");
console.log("***************************************************");
console.log("\n");

let frozen = {
    prop: 123,
    prop2: {
        a: 5,
    }
};

obj = Object.freeze(frozen);

// "prop" is read-only
// frozen.prop = 456; 

// can't define property "prop3": Object is not extensible
// frozen.prop3 = 'prop3';

// property "prop2" is non-configurable and can't be deleted
// delete frozen.prop2;

console.log(obj === frozen); // true
frozen.prop2.a = 55; // OK

console.log(Object.isFrozen(frozen)); // true

/* // can't redefine non-configurable property "prop"
Object.defineProperty(frozen, 'prop', {
    value: 'PROP',
}); 
*/

console.log("\n");
console.log("***************************************************");
console.log("*                 seal - isSealed                 *");
console.log("***************************************************");
console.log("\n");

let sealed = {
    prop: 123,
    prop2: {
        a: 5,
    }
};

console.log(Object.isSealed(sealed)); // false

obj = Object.seal(sealed);

console.log(obj === sealed); // true
sealed.prop = 222; // OK

// can't define property "prop3": Object is not extensible
// sealed.prop3 = 'prop3';

console.log(Object.isSealed(sealed)); // true

// property "prop2" is non-configurable and can't be deleted
// delete sealed.prop2;

Object.defineProperty(sealed, 'prop', {
    value: 'PROP',
}); // OK

console.log("\n");
console.log("***************************************************");
console.log("*       preventExtensions - isExtensible          *");
console.log("***************************************************");
console.log("\n");

obj = {};
obj2 = Object.preventExtensions(obj);
console.log(obj === obj2); // true


let empty = { a: 2 };
console.log(Object.isExtensible(empty)); // === true

Object.preventExtensions(empty);
console.log(Object.isExtensible(empty)); // false

// can't define property "prop": Object is not extensible
// empty.prop = 'prop'; 

empty.a = 222;  // OK
delete empty.a; // OK

console.log("\n");
console.log("***************************************************");
console.log("*                      is                         *");
console.log("***************************************************");
console.log("\n");

console.log(Object.is('foo', 'foo'));   // true
console.log(Object.is(window, window)); // true
console.log(Object.is('foo', 'bar'));   // false
console.log(Object.is([], []));         // false
console.log("\n")

console.log(Object.is(null, null));     // true
console.log(Object.is(0, -0));          // false
console.log(Object.is(-0, -0));         // true
console.log(Object.is(NaN, 0 / 0));     // true
console.log("\n");

let foo = { a: 1 };
let bar = { a: 1 };

console.log(Object.is(foo, foo)); // true
console.log(Object.is(foo, bar)); // false

console.log("\n");
console.log("***************************************************");
console.log("*                setPrototypeOf                   *");
console.log("***************************************************");
console.log("\n");

object1 = {
    a: 'a',
    b: 'b'
};


object2 = {
    c: 'c',
    d: 'd'
}

Object.setPrototypeOf(object2, object1);

/*
{…}
c: "c"
d: "d"
<prototype>: Object { a: "a", b: "b" }
*/
console.log(object2);

console.log("\n");
console.log("***************************************************");
console.log("*                getPrototypeOf                   *");
console.log("***************************************************");
console.log("\n");

let proto = {
    a: 'a',
    b: 'b'
};
obj = Object.create(proto);

// Object { a: "a", b: "b" }
console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj) === proto); // true

console.log("\n");
console.log("***************************************************");
console.log("*                 isPrototypeOf                   *");
console.log("***************************************************");
console.log("\n");

// There is some confusion here. To be updated.


console.log("\n");
console.log("***************************************************");
console.log("*                hasOwnProperty                   *");
console.log("***************************************************");
console.log("\n");

obj = new Object();
obj.prop = 'exists';
obj.__proto__.prop2 = "prop2";


console.log(obj.hasOwnProperty('prop'));            // true
console.log(obj.hasOwnProperty('prop2'));           // false
console.log(obj.hasOwnProperty('toString'));        // false
console.log(obj.hasOwnProperty('hasOwnProperty'));  // false

console.log("\n");


function Test() {
    this.prop1 = "prop1"
}

Test.prop2 = "prop2";
Test.prototype.prop3 = "prop3"
Object.defineProperties(Test, {
    prop4: {
        value: "prop4",
        enumerable: true
    },
    prop5: {
        value: "prop5"
    }
});

console.log(Test.hasOwnProperty("prop1")); // false
console.log(Test.hasOwnProperty("prop2")); // true
console.log(Test.hasOwnProperty("prop3")); // false
console.log(Test.hasOwnProperty("prop4")); // true
console.log(Test.hasOwnProperty("prop5")); // true
console.log("\n");

let test1 = new Test();

console.log(test1.hasOwnProperty("prop1")); // true
console.log(test1.hasOwnProperty("prop2")); // false
console.log(test1.hasOwnProperty("prop3")); // false
console.log(test1.hasOwnProperty("prop4")); // false
console.log(test1.hasOwnProperty("prop5")); // false


console.log("\n");
console.log("***************************************************");
console.log("*             propertyIsEnumarable                *");
console.log("***************************************************");
console.log("\n");

object1 = {
    property1: 'prop'
};

console.log(object1.propertyIsEnumerable('property1')); // true

for(let prop in object1) {
    console.log(prop);       // property1
}

// Object { value: "prop", writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(object1, "property1"));
console.log("\n");


object2 = Object.create(object1);

console.log(object2.propertyIsEnumerable('property1')); // false

for(let prop in object2) {
    console.log(prop);     // property1
}

// undefined
console.log(Object.getOwnPropertyDescriptor(object2, "property1"));

console.log(object2.hasOwnProperty("property1")); // false


console.log("\n");
console.log("***************************************************");
console.log("*                 toString                        *");
console.log("***************************************************");
console.log("\n");

function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
}
let theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
console.log(theDog + ""); // [object Object]

Dog.prototype.toString = function () {
    return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
}

// Dog Gabby is a female chocolate Lab
console.log(theDog + "");

console.log("\n");
console.log("***************************************************");
console.log("*                    valueOf                      *");
console.log("***************************************************");
console.log("\n");

function MyNumberType(n) {
    this.number = n;
}

object1 = new MyNumberType(4);

console.log(object1 + 3); // [object Object]3

MyNumberType.prototype.valueOf = function () {
    return this.number;
};



console.log(object1 + 3); // 7