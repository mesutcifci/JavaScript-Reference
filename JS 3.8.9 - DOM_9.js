"use strict"

console.log("\n");
console.log("***************************************************");
console.log("*        offsetParent/Left/Top/Width/Height       *");
console.log("*           clientTop/Left/Width/Height           *");
console.log("*           scrollWidth/Height/Left/Top           *");
console.log("***************************************************");
console.log("\n");

let div1 = document.getElementById("div1");
/*
NOTE:

offsetParent returns null in the following situations:

    The element or its parent element has the display property set to none.
    The element has the position property set to fixed (firefox returns <body>).
    The element is <body> or <html>.
*/
console.log(div1.offsetParent); // <main id="parent">
console.log(div1.offsetLeft);   // 350
console.log(div1.offsetTop);    // 80
console.log("\n");

//        width + border-left + right + padding-left + right 
// 400 => 300   +      20     + 20    +      30      +  30
console.log(div1.offsetWidth);

//        height + border-top  + bottom + padding-top  + bottom 
// 400 => 300    +      20     + 20     +      30      +  30
console.log(div1.offsetHeight); // 400 
console.log("\n");

console.log(div1.clientLeft); // 20 => border-left
console.log(div1.clientTop);  // 20 => border-top
console.log("\n")

//        (width + padding-left + right) - scrollbar width
// 348 => (300    +      30     + 30)    - 12
console.log(div1.clientWidth);  

//        height + padding-top + bottom
// 360 => 300    +      30     + 30
console.log(div1.clientHeight);
console.log("\n");


console.log(div1.scrollHeight); // 1284
console.log(div1.scrollWidth);  // 348
console.log("\n");

// these values ​​change as the scrollbar moves
console.log(div1.scrollLeft); // 0
console.log(div1.scrollTop);  // 0