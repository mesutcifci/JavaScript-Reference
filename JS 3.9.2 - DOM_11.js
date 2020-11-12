"use strict"

function showButtonId(id) {
    alert(id);
}

function sayHello() {
    alert("Hello");
}

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => { showButtonId("btn2") });
btn2.addEventListener("click", sayHello)


let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", event => {
    // [object MouseEvent] click [object HTMLInputElement], 236, 29
    alert(`${event} ${event.type} ${event.currentTarget}, ${event.clientX}, ${event.clientY}`);
});

let obj = {
    handleEvent(event) {
        alert("btn4" + event);
    }
}

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", obj);

function targetFunction(event) {
    console.log(event.target);
    console.log(this);
    console.log(event.currentTarget);

    event.target.style.backgroundColor = 'yellow';

    // chrome needs some time to paint yellow
    setTimeout(() => {
        alert("target = " + event.target.tagName + ", this=" + this.tagName);
        event.target.style.backgroundColor = ''
    }, 0);

}

// Bubbling
// this event is triggered even if we click on items inside div1
let div1 = document.getElementById("div1");
div1.addEventListener("click", targetFunction);

/*
let p1 = document.getElementById("p1");

// note: if we write this line the bubbling is prevent for p1
p1.addEventListener("click", function(event) {
    event.stopPropagation();
  //  also this method prevent all handlers of p1
  //  event.stopImmediatePropagation()
});
*/



let div2 = document.getElementById("div2");
div2.addEventListener("click", () => { alert("div2") });

let span2 = document.getElementById("span2");
span2.addEventListener("click", () => { alert("span2") });

let p2 = document.getElementById("p2");
p2.addEventListener("click", () => { alert("p2") });




let div3 = document.getElementById("div3");
div3.addEventListener("click", () => {
    alert("div3 ")
}, true);


div3.addEventListener("click", () => {
    alert("div3")
});



let span3 = document.getElementById("span3");
span3.addEventListener("click", () => {
    alert("span3 ")
}, true);


span3.addEventListener("click", () => {
    alert("span3")
});



let p3 = document.getElementById("p3");
p3.addEventListener("click", () => {
    alert("p3 ")
});


p3.addEventListener("click", () => {
    alert("p3")
});
