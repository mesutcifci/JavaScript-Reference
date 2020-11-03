import {sayHello, obj} from './JS 3.7.1 - module-A.js';
import  {testB as TB, outerB} from './JS 3.7.2 - module-B.js';
import * as module2 from './JS 3.7.3 - module-C.js';
import X from './JS 3.7.4 - module-D.js';

// import first then export
// export {sayHello, obj} from './JS 3.7.1 - module-A.js';

sayHello('module-E.js');  // Hi. I am coming from module A.js and now i am inside in module-E.js

// the result true only if moduleE-js is module type and moduleB-js is executed
// otherwise prints 'prop-1
console.log(obj.prop);    // changed in module-B.js

console.log(import.meta.url); // http://127.0.0.1:5500/JS%203.7.5%20-%20module-E.js

module2.A(); // I am coming from module C.js(function A)
module2.B(); // I am coming from module C.js(function A)

TB(); // testB
outerB(); // outerB

X(); // testD