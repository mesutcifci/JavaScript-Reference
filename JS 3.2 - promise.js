"use strict"

/*
let myPromise = new Promise((resolve, reject) => {});


// Promise { "pending" }
// <state>: "pending"

console.log(myPromise);
*/

// ------------------------------------------------------------------------------------ 

/*

let bool = true;
let myPromise = new Promise((resolve, reject) => {

    if(bool) {
        resolve('Success');
    }else {
        reject('Fail');
    }

});

// Promise { "fulfilled" }
// <state>: "fulfilled;
// <value>: "Success"
console.log(myPromise);

*/

// ------------------------------------------------------------------------------------ 

/*
let bool = false;
let myPromise = new Promise((resolve, reject) => {

    if(bool) {
        resolve('Success');
    }else {
        reject('Fail');
    }

});

// Promise { "rejected" }
// <state>: "rejected"
// <reason>: "Fail"
// Uncaught (in promise) Fail
console.log(myPromise);
*/

// ------------------------------------------------------------------------------------ 

/*
let bool = true;
let myPromise = new Promise((resolve, reject) => {

    if(bool) {
        resolve('Success');
    }else {
        reject('Fail');
    }

});


myPromise.then(
    resolve => {
        console.log(resolve); // if bool == true log success
    }
).catch(
    reject => {
        console.log(reject); // if bool == false log Fail
    }
).finally(
    () => {
        console.log("....."); // 'Finally' block will work regardless of the value of the bool variable
    }
)
*/

// ------------------------------------------------------------------------------------ 

/*
function getData() {
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve({data: 'data from the server'})
            }, 10000);
        });
}

function playMusic() {
    console.log("music is playing")
}

getData().then(
    value => {
        console.log(value.data);
    }
);

playMusic();

// result music is playing 'then'  data from server

*/

// ------------------------------------------------------------------------------------ 

/*
function getData() {
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve({data: 'data from the server'})
            }, 10000);
        });
}

function playMusic() {
    console.log("music is playing")
}

getData().then(
    value => {
        console.log(value.data); // data from the server
        value.data = value.data.toUpperCase();
        return value
    }
).then(
    value => {
        console.log(value.data) // DATA FROM THE SERVER
    }
);

playMusic();
*/

// ------------------------------------------------------------------------------------ 

/*
function getData() {
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve({data: 'data from the server'})
            }, 10000);
        });
}

function playMusic() {
    console.log("music is playing")
}

getData().then(
    value => {
        console.log(value.data); // data from the server
        value.data = value.data.toUpperCase();
        return value
    }
)

getData().then(
    value => {
        console.log(value.data) // data from the server
    }
);

playMusic();

*/

// ------------------------------------------------------------------------------------ 

/*
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'data from the server' });
        }, 10000);
    });
}

function playMusic() {
    console.log("music is playing")
}

getData().then(
    value => {
        console.log(value.data) // data from the server
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: 'another data' });
            }, 2000)
        })
    }
).then(
    value => {
        console.log(value.data); // another data
    }
)

playMusic();

*/

// ------------------------------------------------------------------------------------ 
// Promise.all

/*

let promise1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise 1 executed");
    }, 3000)
});


let promise2 = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise 2 executed");
    }, 2000)
});


let promise3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise 3 executed");
    }, 1000)
});

function print(promise) {
    alert(promise.join(" - "));
}

Promise.all([promise1, promise2, promise3]).then(
    print
).catch(alert);

// result = promise 1 executed - promise 2 executed - promise 3 executed

Promise.all([promise1, promise2, promise3]).then(
    resolve => {
        console.log(resolve[0]); // promise 1 executed
    }
).catch(alert);

*/

/*
let promise1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise 1 executed");
    }, 3000)
});


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 2 failed");
    }, 2000)
});


let promise3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise 3 executed");
    }, 1000)
});

// result = promise 2 failed
Promise.all([promise1, promise2, promise3]).then(alert).catch(alert);
*/

// ------------------------------------------------------------------------------------ 
// Promise.allSettled

/*

let promise1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise 1 executed");
    }, 3000)
});


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 2 failed");
    }, 2000)
});


let promise3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("promise 3 executed");
    }, 1000)
});

function print(promise) {
    console.log(promise);
}

// (3) […]
//  0: Object { status: "fulfilled", value: "promise 1 executed" }
//  1: Object { status: "rejected", reason: "promise 2 failed" }
//  2: Object { status: "fulfilled", value: "promise 3 executed" }
//
Promise.allSettled([promise1, promise2, promise3]).then(print).catch(alert);
*/

// ------------------------------------------------------------------------------------ 
// Promise.race
/*
Promise.race([
    new Promise((resolve) => setTimeout(() => resolve('A'), 3000)),
    new Promise((resolve) => setTimeout(() => resolve('B'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('C'), 2000))
]).then(alert); 

// result B

*/

// ------------------------------------------------------------------------------------ 
// Promise.resolve / reject

/*
let promise1 = Promise.resolve("promise 1");

promise1.then(resolve => {
    console.log(resolve + " successful"); // promise 1 successfull
}).catch(reject => {
    console.log(reject + " failed");
});

promise1 = Promise.reject("promise 1");

promise1.then(resolve => {
    console.log(resolve + " successful"); 
}).catch(reject => {
    console.log(reject + " failed"); // // promise 1 successfull
});
*/

// ------------------------------------------------------------------------------------ 

/*
let  promise1 = Promise.resolve('promise 1 executed');

promise1.then( resolve => {
    console.log(resolve);
});

console.log("something");

// result something then promise 1 executed

*/