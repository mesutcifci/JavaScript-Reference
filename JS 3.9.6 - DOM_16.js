"use strict"

let form1 = document.forms.myForm;
console.log(form1);  // <form name="myForm">


let input1 = form1.elements.input1;
console.log(input1); // <input name="input1" value="input 1">


let radioButtons = form1.elements.age;
// RadioNodeList { 0: input#radio-18, 1: input#radio+18, value: "", length: 2 }
console.log(radioButtons);


let fieldset1 = form1.elements.fieldset1;
console.log(fieldset1.elements.input3); // <input name="input3" value="input 3">
console.log(form1.elements.input1 === form1.input1); // true
console.log(input1.form);  // <form name="myForm">


let checkbox1 = form1.checkbox1;
console.log(checkbox1.checked); // if checked true otherwise false
console.log(input1.value); // input 1


let select1 = form1.select1;
select1.selectedIndex = 1;
// HTMLOptionsCollection { 0: option, 1: option, 2: option, length: 3, selectedIndex: 1 }
console.log(select1.options); 
console.log(select1.value); // two


let select2 = form1.select2;
console.log(select2.options[0].selected); // true
console.log(select2.options[1].selected); // false