import('./JS 3.6.1 - module-A.js').then(
    (module) => {
        module.sayHello('module-F'); // Hi. I am coming from module-A.js and now i am inside in module-F
        console.log(module.obj.prop); // prop-1
    }
)