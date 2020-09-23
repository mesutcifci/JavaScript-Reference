/* Creating Map*/
new Map();
new Map([['Key', 'Value']]);
let map1 = new Map();

/* Object vs Map */

let obj = {
    1: 111,
    true: true,
};

console.log(Object.keys(obj)); // Array [ "1", "true" ] typeof all properties are string

console.log(
    new Map([
        [1, 111],
        [true, true]
    ])
);  // Map { 1 → 111, true → true } 
console.log("\n");

let user_1 = {
    name: "Mesut"
}

let obj_2 = {
    [user_1]: 123,
};

console.log(Object.keys(obj_2)); // Array [ "[object Object]" ]

let user_map = new Map([
    [user_1, 123],
]);

console.log(user_map); // Map { {…} → 123 }
console.log("\n");
console.log("-----------------------------------------------------------------");
/* Setting object properties */

// properties does not interact with the Map data structure.
// It uses the feature of the generic object. 
// The value of 'bla' is not stored in the Map for queries.
let wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
console.log("\n");


let map = new Map([[1, 2], [3, 4]]);
console.log(map instanceof Object); //true

let obj_3 = new Object();
console.log(obj_3 instanceof Map); //false
console.log("-----------------------------------------------------------------");

/* for of */

for (let i of map) {
    console.log(i);  // Array [ 1, 2 ], Array [ 3, 4 ]
}

console.log("-----------------------------------------------------------------");
/* Cloning and merging Maps */

let original = new Map([
    [1, 'one']
])

let clone = new Map(original)

console.log(clone.get(1))       // one
console.log(original === clone) // false 
console.log("\n");

console.log(original); // Map { 1 → "one" }
console.log(clone);    // Map { 1 → "one" }


let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  let second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  
  // Merge two maps. The last repeated key wins.
  // Spread operator essentially converts a Map to an Array
  let merged = new Map([...first, ...second])
  
  console.log(merged.get(1)) // uno
  console.log(merged.get(2)) // dos
  console.log(merged.get(3)) // three

console.log("-----------------------------------------------------------------");



console.log("\n");
console.log("***************************************************");
console.log("*                   size                        *");
console.log("***************************************************");
console.log("\n");

map = new Map([
    ['one', 1],
    ['two, 2']
]);

console.log(map.size); // 2


console.log("\n");
console.log("***************************************************");
console.log("*                set - get - has                  *");
console.log("***************************************************");
console.log("\n");


map = new Map();

map.set('fruit', 'apple');
map.set('animal', 'cat');

console.log(map); // Map { fruit → "apple", animal → "cat" }

map.set('person', 'mesut')
    .set('city', 'Ankara');

console.log(map); // Map(4) { fruit → "apple", animal → "cat", person → "mesut", city → "Ankara" }
console.log("\n");


console.log(map.get('person')); // mesut
console.log(map.get(0));        // undefined
console.log(map.get('hello'));  // undefined
console.log("\n");

console.log(map.has('person')); // true
console.log(map.has('hello'));  // false


console.log("\n");
console.log("***************************************************");
console.log("*            keys - values - entries              *");
console.log("***************************************************");
console.log("\n");


map = new Map([
    ['one', 1],
    ['two', 2],
]);

console.log(map.keys()); // Map Iterator {  }

let iterator_1 = map.keys();
console.log(iterator_1.next());       // Object { value: "one", done: false }
console.log(iterator_1.next().value); // two
console.log(iterator_1.next().done);  // true
console.log("\n");

iterator_1 = map.values();
console.log(iterator_1.next());        // Object { value: 1, done: false }
console.log(iterator_1.next().value);  // 2
console.log(iterator_1.next().done);   // true
console.log("\n");

iterator_1 = map.entries();
console.log(iterator_1.next());       // Object { value: (2) […], done: false }
console.log(iterator_1.next().value); // Array [ "two", 2 ]
console.log(iterator_1.next().done);  // true


console.log("\n");
console.log("***************************************************");
console.log("*                 delete - clear                  *");
console.log("***************************************************");
console.log("\n");


map = new Map([
    ['one', 1],
    ['two', 2],
]);

map.delete('one'); // Returns true. Successfully removed.
console.log(map);  // Map { two → 2 } 

map.delete('one'); // Returns false.

map.set('one', 1).set('animal', 'cat');
console.log(map); // { two → 2, one → 1, animal → "cat" }

map.clear();
console.log(map); // Map(0)


console.log("\n");
console.log("***************************************************");
console.log("*                 forEach                  *");
console.log("***************************************************");
console.log("\n");


map = new Map([
    ['one', 1],
    ['two', 2],
]);


/*
key   = one 
value = 1 
map   = [object Map]
        
key   = two 
value = 2 
map   = [object Map]
*/
console.log(map.forEach((value, key, map) => {
    console.log(`key   = ${key} \nvalue = ${value} \nmap   = ${map}
        `)
}));



