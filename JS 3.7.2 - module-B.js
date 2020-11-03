import {sayHello, obj} from './JS 3.7.1 - module-A.js';

obj.prop = 'changed in module-B.js';
sayHello('module-B.js'); // Hi. I am coming from module-A.js and now i am inside in module-B.js

export function testB() {
    console.log('testB');    
}

function test2B() {
    console.log('test2B');
}

export {test2B as outerB}