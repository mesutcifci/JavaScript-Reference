function User(name, age, job, cat, favouriteColors) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.cat = cat;
    this.favouriteColor = favouriteColors;
};

let user_1 = new User('mesut', 23, 'unemployed', { name: 'gırgır', race: 'sarman' }, ['black', 'red']);

/*
{
    "name":"mesut",
    "age":23,
    "job":"unemployed",
    "cat":{"name":"gırgır","race":"sarman"},
    "favouriteColor":["black","red"]
}
*/
console.log(JSON.stringify(user_1));
console.log("\n");

/* ------------------------------------------------------------------------------------ */

user_1 = {
    sayHi() { // ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};

console.log(JSON.stringify(user_1)); // {}  

console.log("\n");

/* ------------------------------------------------------------------------------------ */

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
};

meetup.place = room;
room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup)); // TypeError: cyclic object value

//  everything except occupiedBy is serialized. 
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));

console.log("\n");

/* ------------------------------------------------------------------------------------ */

room = {
    number: 23
};

meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));

/*
key:value pairs that come to replacer:
:             [object Object]  // "" : meetup
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]

{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
*/

console.log("\n");

/* ------------------------------------------------------------------------------------ */

room = {
    number: 23
};

meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
};

meetup.place = room;
room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number'], 2));
/*
{
  "title": "Conference",
  "participants": [
    {
      "name": "John"
    },
    {
      "name": "Alice"
    }
  ],
  "place": {
    "number": 23
  }
}
*/

console.log("\n");

/* ------------------------------------------------------------------------------------ */

JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) // '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 }); // '{"x":5,"y":6}'

JSON.stringify([new Number(3), new String('false'), new Boolean(false)]); // '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
let a = ['foo', 'bar'];
a['baz'] = 'quux';  // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);  // '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () { }, Symbol('')] });  // '{"x":[10,null,null,null]}' 

// Standard data structures
JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{ a: 1 }]), new WeakMap([[{ a: 1 }, 2]])]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'

JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'

JSON.stringify([new Float32Array([1]), new Float64Array([1])]); // '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({ x: 5, y: 6, toJSON() { return this.x + this.y; } }); // '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') }); // '{}'

JSON.stringify({ [Symbol('foo')]: 'foo' }); // '{}'

JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]); // '{}'

JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function (k, v) {
    if (typeof k === 'symbol') {
        return 'a symbol';
    }
}); // undefined

// Non-enumerable properties:
JSON.stringify(Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }));
// '{"y":"y"}'

//JSON.stringify({x: 2n}); // TypeError: BigInt value can't be serialized in JSON

/* ------------------------------------------------------------------------------------ */

var obj = {
    data: 'data',

    toJSON(key) {
        if (key)
            return `Now I am a nested object under key '${key}'`;
        else
            return this;
    }
};

JSON.stringify(obj); // '{"data":"data"}'

// Shorthand property names (ES2015).
JSON.stringify({ obj }); // '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([obj]); // '["Now I am a nested object under key '0'"]'


/* ------------------------------------------------------------------------------------ */


let json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count); // 42

console.log(obj.result); // true



JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
    console.log(`key = ${key}, value = ${value}`);
    return value;     // return the unchanged property value.
});

/*
key = 1, value = 1 
key = 2, value = 2
key = 4, value = 4 
key = 6, value = 6 
key = 5, value = [object Object] 
key = 3, value = [object Object] 
key =  , value = [object Object]
*/

