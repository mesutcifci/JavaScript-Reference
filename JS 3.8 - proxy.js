"use strict"

let obj1 = {};
let proxy1 = new Proxy(obj1, {});

proxy1.number = 123;
console.log(obj1.number); // 123
console.log("\n");

// -----------------------------------------------------------------------------------------

let obj2 = {
    prop1: 'prop1'
};

obj2 = new Proxy(obj2, {
    get(target, property) {
        if (property in target) {
            return property;
        } else {
            return 'no such property';
        }
    }
})

console.log(obj2.prop1); // prop1
console.log(obj2.prop2); // no such property
console.log("\n");

// -----------------------------------------------------------------------------------------

let obj3 = {
    name: 'obj3',
}

obj3 = new Proxy(obj3, {
    get(target, property, receiver) {
        console.log(target);   // Object { name: "obj3" }
        console.log(property); // name
        /*
        Proxy
            <target>: Object { name: "obj3" }
           <handler>: Object { get: get(target, property, receiver) }
        */
        console.log(receiver);
    }
});

obj3.name;
console.log("\n");

// -----------------------------------------------------------------------------------------

let obj4 = {
    name: 'obj4',
}

obj4 = new Proxy(obj4, {
    set(target, property, value, receiver) {
        console.log(target);   // Object { name: "obj4" }
        console.log(property); // name
        console.log(value);    // ABC
        /*
        Proxy
            <target>: Object { name: "obj4" }
           <handler>: Object { set: set(target, property, value, receiver) }
        */
        console.log(receiver);
        return true;
    }
});


obj4.name = 'ABC';
console.log("\n");

// -----------------------------------------------------------------------------------------

let numbers = [];

numbers = new Proxy(numbers, {
    set(target, property, value) {
        if (typeof value != 'number') {
            target[property] = NaN;
            return true;
        } else {
            target[property] = value;
            return true;
        }
    }
});

numbers.push(1, 2, 3, '60', '70')

for (let number of numbers) {
    console.log(number); // 1 2 3 NaN NaN
}
console.log("\n");

// -----------------------------------------------------------------------------------------

let user = {
    name: "John",
    age: 30,
    _password: "***"
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

// "ownKeys" filters out _password
for (let key in user) {
    console.log(key);  // name, then: age
}
console.log("\n");

// -----------------------------------------------------------------------------------------

let user2 = {
    prop1: 'prop1'
};

user2 = new Proxy(user, {
    ownKeys(target) { // called once to get a list of properties
        return ['a', 'b', 'c'];
    },

    getOwnPropertyDescriptor(target, prop) { // called for every property
        return {
            enumerable: true,
            configurable: true
            /* ...other flags, probable "value:..." */
        };
    }

});

console.log(Object.keys(user2)); // Array(3) [ "a", "b", "c" ]

for (let key in user2) {
    console.log(key);  // a, b: c
}
console.log("\n");

// -----------------------------------------------------------------------------------------

let obj5 = {
    prop1: 'prop1'
};

obj5 = new Proxy(obj5, {
    deleteProperty(target, prop) {
        if (prop in target) {
            delete target[prop];
            console.log(`property removed: ${prop}`);
            return true;
        }
    }
});

delete obj5.prop1; // logs 'property removed: prop1'
console.log("\n");

// -----------------------------------------------------------------------------------------

let range = {
    start: 1,
    end: 10
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end;
    }
});

console.log(5 in range); // true
console.log(50 in range); // false
console.log("\n");

// -----------------------------------------------------------------------------------------

function sum(num1, num2) {
    return num1 + num2;
}

let proxy2 = new Proxy(sum, {
    apply(target, thisArg, argumentsList) {
        // target => function sum(num1, num2)
        // thisArg => undefined
        // argumentsList => Array [ 1, 2 ]
        return target(argumentsList[0], argumentsList[1]) * 10;
    }
});

console.log(sum(1, 2)); // 3
console.log(proxy2(1, 2)); // 30
console.log("\n");

// -----------------------------------------------------------------------------------------

function obj6(prop1) {
    this.prop1 = prop1;
}

obj6 = new Proxy(obj6, {
    construct(target, argArray, newTarget) {
        // target    => function obj6(prop1)
        // argArray  => Array ['property 1']
        // newTarget => Proxy { <target>: obj6(prop1), <handler>: {…} }
        console.log('obj6 constructor was called');
        return new target(...argArray);
    }
});

let instance = new obj6('property 1');


/*
* also
* handler.defineProperty(), handler.getPrototypeOf(), handler.isExtensible()
* handler.preventExtensions(), handler.setPrototypeOf() 
* available
*/


let revocable = Proxy.revocable({}, {
    get: function (target, name) {
        return '[[' + name + ']]'
    }
})
let proxy = revocable.proxy
console.log(proxy.foo)  // "[[foo]]"

revocable.revoke()

// console.log(proxy.foo) // TypeError is thrown
// proxy.foo = 1          // TypeError again
// delete proxy.foo        // still TypeError
typeof proxy              // "object", typeof doesn't trigger any trap