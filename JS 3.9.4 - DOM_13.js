"use strict"

let btnUnclickable = document.getElementsByTagName("input")[2];
btnUnclickable.addEventListener('mousedown', (event) => {
    event.preventDefault();
    alert(event.defaultPrevented);
});



let btn1 = document.getElementById("btn-custom-event1");
let customEvent1 = new Event("click");
btn1.addEventListener("click", () => console.log("custom event 1"));
btn1.dispatchEvent(customEvent1);



let btn2 = document.getElementById("btn-custom-event2");
btn2.addEventListener("customEvent2", () => console.log("custom event 2"));
let customEvent2 = new Event("customEvent2", { bubbles: true });
btn2.dispatchEvent(customEvent2);



let event1 = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
});

console.log(event1.clientX); // 100

let event2 = new Event("click", {
    bubbles: true,    // only bubbles and cancelable work in the Event constructor
    cancelable: true, 
    clientX: 100,
    clientY: 100
});
console.log(event2.clientX); // undefined, the unknown property is ignored!



let btn3 = document.getElementById("btn-custom-event3");
btn3.addEventListener("customEvent3", event => console.log(event.detail.name));
let customEvent3 = new CustomEvent("customEvent3", {
   detail: { name: "custom event 3" }
});
btn3.dispatchEvent(customEvent3);