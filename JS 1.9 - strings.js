/* deal with unicode symbols */

console.log('\x41\x42\x43');       // ABC
console.log('\u0041\u0042\u0043'); // ABC
console.log('\uD83D\uDCA9'); // PILE OF POO (surrogate pair)
console.log('\u{1F4A9}');    // PILE OF POO

'A'.length // 1
'𝐀'.length // 2

console.log("\n");
console.log("***************************************************")
console.log("*            fromCharCode - fromCodePoint         *")
console.log("***************************************************")
console.log("\n");

console.log(String.fromCharCode(65, 78, 96));     // AN`
console.log(String.fromCharCode(0x2547));         // ╇
console.log(String.fromCharCode(0xD83C, 0xDF03)); // 🌃 (U+1F303 surrogate pair)
console.log(String.fromCodePoint(0x1F303));       // 🌃 

console.log("\n");
console.log("***************************************************");
console.log("*        charAt - charCodeAt - codePointAt        *");
console.log("***************************************************");
console.log("\n");

let text = "Hello, World";

console.log(text.length); // 12

console.log(text[0]);  // H
console.log(text[55]); // undefined
console.log(text[-1]); // undefined

console.log(text.charAt());   // H
console.log(text.charAt(4));  // o
console.log(text.charAt(55)); // empty string
console.log(text.charAt(-1)); // empty string

console.log(text.charCodeAt(4));  // 111
console.log(text.charCodeAt(55)); // NaN
console.log(text.charCodeAt(-1)); // NaN
console.log("\n");

let text_2 = "🌃";

console.log(text_2.charCodeAt());   // 55356
console.log(text_2.charCodeAt(1));  // 57091

console.log("\n")
console.log(text_2.codePointAt());  // 127747
console.log(text_2.codePointAt(1)); // 57091

console.log("\n");
console.log(text_2.charCodeAt(0).toString(16));  // d83c
console.log(text_2.charCodeAt(1).toString(16));  // df03

console.log("\n");
console.log(text_2.codePointAt(0).toString(16)); // 1f303
console.log(text_2.codePointAt(1).toString(16)); // df03

console.log("\n");
console.log(String.fromCodePoint(text_2.charCodeAt(0)));   // �
console.log(String.fromCodePoint(text_2.codePointAt(0)));  // 🌃

console.log("\n");
console.log("***************************************************");
console.log("*                   concat                        *");
console.log("***************************************************");
console.log("\n");

let hello = "Hello";
console.log(hello.concat(' Mesut', '. How are you?')); // Hello Mesut. How are you?

let greetList = ['Hello', ' ', 'Venkat', '!'];
console.log("".concat(greetList));    // Hello, ,Venkat,!
console.log("".concat(...greetList)); // Hello Venkat!


console.log("\n");
console.log("***************************************************")
console.log("*              startsWith - endsWith              *");
console.log("***************************************************")
console.log("\n");


text = "Hello, World";

console.log(text.startsWith('Hel'));   // true
console.log(text.startsWith('Hol'));   // false
console.log(text.startsWith('Wo', 7)); // true

console.log("\n");
console.log(text.endsWith('ld'));    // true
console.log(text.endsWith('e', 1));  // false
console.log(text.endsWith('e', 2));  // true

console.log("\n");
console.log("***************************************************");
console.log("*                 includes                        *");
console.log("***************************************************");
console.log("\n");


let sentence = 'The quick brown Fox jumps over the lazy dog.';
let word = 'Fox';

console.log(sentence.includes(word));     // true
console.log(sentence.includes('ick', 6)); // true
console.log(sentence.includes('ick', 7))  // false


console.log("\n");
console.log("***************************************************");
console.log("*                   indexOf                       *");
console.log("***************************************************");
console.log("\n");


text = "Hello, World";

console.log(text.indexOf('o'));      // 4
console.log(text.indexOf('o', 8));   // 8
console.log("\n");

console.log(text.indexOf('o', -44)); // 4
console.log(text.indexOf('o', 55));  // -1

console.log(text.indexOf('o', 9));   // -1
console.log(text.indexOf('O'));      // -1
console.log("\n");

console.log(text.indexOf(''));      // 0
console.log(text.indexOf('', 0));   // 0
console.log(text.indexOf('', -33)); // 0
console.log("\n");

console.log(text.indexOf('', 11));  // 11
console.log(text.indexOf('', 33));  // 12 (length + 1)
console.log(text.indexOf('', 43));  // 12 (length + 1)
console.log("\n");

console.log('Blue Whale'.indexOf('Whale')); // 5
console.log('Blue Whale'.indexOf('Whala')); // -1


console.log("\n");
console.log("***************************************************")
console.log("*                 lastIndexOf                     *");
console.log("***************************************************")
console.log("\n");


console.log('parola'.lastIndexOf('a'));     // 5
console.log('parola'.lastIndexOf('o', 2));  // -1  searching on par
console.log('parola'.lastIndexOf('o', 4));  // 3   searching on parol
console.log("\n")

console.log('canal'.lastIndexOf('c', -1));  // 0
console.log('canal'.lastIndexOf('c', -11)); // 0
console.log('canal'.lastIndexOf('n', -1));  // -1
console.log("\n");

console.log('canal'.lastIndexOf(''));       // 5
console.log('canal'.lastIndexOf('', 2));    // 2
console.log('canal'.lastIndexOf('a', 55));  // 3
console.log('canal'.lastIndexOf('a', 0));   // -1
console.log('canal'.lastIndexOf('x'));      // -1
console.log("\n");

console.log(text.lastIndexOf(''));    // 12
console.log(text.lastIndexOf('', 0)); // 0
console.log(text.lastIndexOf('', 3)); // 3
console.log("\n");

console.log(text.lastIndexOf('', 11)); // 11
console.log(text.lastIndexOf('', 13)); // 12
console.log(text.lastIndexOf('', 22)); // 12



console.log("\n");
console.log("***************************************************")
console.log("*                 localeCompare                   *");
console.log("***************************************************")
console.log("\n");


console.log('a'.localeCompare('c'));           // -2 or -1 (or some other negative value)
console.log('check'.localeCompare('against')); // 2 or 1 (or some other positive value)
console.log('a'.localeCompare('a'));           // 0
console.log("\n");

console.log('ä'.localeCompare('z', 'de')); // a negative value: in German, ä sorts before z
console.log('ä'.localeCompare('z', 'sv')); // a positive value: in Swedish, ä sorts after z
console.log("\n");

console.log("2".localeCompare("10")); // 1
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1
console.log("2".localeCompare("10", "en-u-kn-true")); // -1


console.log("\n");
console.log("***************************************************");
console.log("*           padStart - padEnd - repeat            *");
console.log("***************************************************");
console.log("\n");


console.log('abc'.padStart(5));      // "  abc"
console.log('abc'.padStart(8, "*")); // *****abc
console.log('abc'.padStart(6, 0));   // 000abc

console.log('abc'.padEnd(5));      // "abc  "
console.log('abc'.padEnd(8, "*")); // abc*****
console.log('abc'.padEnd(6, 0));   // abc000

console.log('abc'.repeat(5)); // abcabcabcabcabc

console.log("\n");
console.log("***************************************************");
console.log("*           slice - substr - substring            *");
console.log("***************************************************");
console.log("\n");

let str = 'Mozilla';

console.log(`str.slice()     = ${str.slice()}`);       // Mozilla
console.log(`str.substr()    = ${str.substr()}`);      // Mozilla
console.log(`str.substring() = ${str.substring()}`);   // Mozilla
console.log("\n");


console.log(`str.slice(2)     = ${str.slice(2)}`);      // zilla
console.log(`str.substr(2)    = ${str.substr(2)}`);     // zilla
console.log(`str.substring(2) = ${str.substring(2)}`);  // zilla
console.log("\n");

console.log(`str.slice(0, 3)     = ${str.slice(0, 3)}`);     // Moz
console.log(`str.substr(0, 3)    = ${str.substr(0, 3)}`);    // Moz
console.log(`str.substring(0, 3) = ${str.substring(0, 3)}`); // Moz
console.log("\n");

console.log(`str.slice(1, 3)     = ${str.slice(1, 3)}`);     // oz
console.log(`str.substr(1, 3)    = ${str.substr(1, 3)}`);    // ozi
console.log(`str.substring(1, 3) = ${str.substring(1, 3)}`); // oz
console.log("\n");

console.log(`str.slice(2, 3)     = ${str.slice(2, 3)}`);     // z
console.log(`str.substr(2, 3)    = ${str.substr(2, 3)}`);    // zil
console.log(`str.substring(2, 3) = ${str.substring(2, 3)}`); // z 
console.log("\n");

console.log(`str.slice(3, 1)     = ${str.slice(3, 1)}`);      // ""
console.log(`str.substr(3, 1)    = ${str.substr(3, 1)}`);     // i
console.log(`str.substring(3, 1) = ${str.substring(3, 1)}`);  // oz swapped substring(1, 3)
console.log("\n");

console.log(`str.slice(3, 2)     = ${str.slice(3, 2)}`);       // ""
console.log(`str.substr(3, 2)    = ${str.substr(3, 2)}`);      // i
console.log(`str.substring(3, 2) = ${str.substring(3, 2)}`);   // z swapped substring(2, 3)
console.log("\n");

console.log(`str.slice(2, 20)     = ${str.slice(2, 20)}`);     // zilla
console.log(`str.substr(2, 20)    = ${str.substr(2, 20)}`);    // zilla
console.log(`str.substring(2, 20) = ${str.substring(2, 20)}`); // zilla
console.log("\n");

console.log(`str.slice(3, 0)     = ${str.slice(3, 0)}`);     // ""
console.log(`str.substr(3, 0)    = ${str.substr(3, 0)}`);    // ""
console.log(`str.substring(3, 0) = ${str.substring(3, 0)}`); // Moz
console.log("\n")

console.log(`str.slice(20, 2)     = ${str.slice(20, 2)}`);     // ""
console.log(`str.substr(20, 2)    = ${str.substr(20, 2)}`);    // ""
console.log(`str.substring(20, 2) = ${str.substring(20, 2)}`); // zilla
console.log("\n");

console.log(`str.slice(-1, -4)     = ${str.slice(-1, -4)}`);     // ""
console.log(`str.substr(-1, -4)    = ${str.substr(-1, -4)}`);    // ""
console.log(`str.substring(-1, -4) = ${str.substring(-1, -4)}`); // ""
console.log("\n");

console.log(`str.slice(-5, -2)     = ${str.slice(-5, -2)}`);     // zil 
console.log(`str.substr(-5, -2)    = ${str.substr(-5, -2)}`);    // ""
console.log(`str.substring(-5, -2) = ${str.substring(-5, -2)}`); // "" 
console.log("\n");

console.log(`str.slice(2, -3)     = ${str.slice(2, -3)}`);      // zi
console.log(`str.substr(2, -3)    = ${str.substr(2, -3)}`);     // ""
console.log(`str.substring(2, -3) = ${str.substring(2, -3)}`);  // Mo
console.log("\n");

console.log(`str.slice(-1)     = ${str.slice(-1)}`);     // a
console.log(`str.substr(-1)    = ${str.substr(-1)}`);    // a
console.log(`str.substring(-1) = ${str.substring(-1)}`); // Mozilla
console.log("\n");

console.log(`str.slice(-3)     = ${str.slice(-3)}`);     // lla
console.log(`str.substr(-3)    = ${str.substr(-3)}`);    // lla
console.log(`str.substring(-3) = ${str.substring(-3)}`); // Mozilla
console.log("\n");

console.log(`str.slice(-3, 1)     = ${str.slice(-3, 1)}`);     // ""
console.log(`str.substr(-3, 1)    = ${str.substr(-3, 1)}`);    // l
console.log(`str.substring(-3, 1) = ${str.substring(-3, 1)}`); // M
console.log("\n");

console.log(`str.slice(-3, 3)     = ${str.slice(-3, 3)}`);     // ""
console.log(`str.substr(-3, 3)    = ${str.substr(-3, 3)}`);    // lla
console.log(`str.substring(-3, 3) = ${str.substring(-3, 3)}`); // Moz
console.log("\n");

console.log(`str.slice(-3, 5)     = ${str.slice(-3, 5)}`);     // l
console.log(`str.substr(-3, 5)    = ${str.substr(-3, 5)}`);    // lla
console.log(`str.substring(-3, 5) = ${str.substring(-3, 5)}`); // Mozil
console.log("\n");

console.log(`str.slice(-20, 2)     = ${str.slice(-20, 2)}`);     // Mo
console.log(`str.substr(-20, 2)    = ${str.substr(-20, 2)}`);    // Mo
console.log(`str.substring(-20, 2) = ${str.substring(-20, 2)}`); // Mo

console.log("\n");
console.log("***************************************************");
console.log("*                     split                       *");
console.log("***************************************************");
console.log("\n");

str = 'My cats are so beautifull';
let words = str.split("a");

for (i of words) {
    console.log(i);
}

/*
My
cats
are
so
beautifull
 */
console.log("\n");


str = "one-two-three-four-five-six";
words = str.split("-", 3);

for (i of words) {
    console.log(i);
}
/* 
one
two
three
*/
console.log("\n");

str = "MyabcNameabcIsabcMesut";
words = str.split('abc');

for (i of words) {
    console.log(i);
}
/*
My
Name
Is
Mesut
*/



console.log("\n");
console.log("***************************************************");
console.log("*            toUpperCase - toLowerCase            *");
console.log("***************************************************");
console.log("\n");


text = "Hello, World";

console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world


console.log("\n");
console.log("***************************************************");
console.log("*     toLocaleUpperCase - toLocaleLowerCase       *");
console.log("***************************************************");
console.log("\n");


let city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US')); // ISTANBUL
console.log(city.toLocaleUpperCase('TR'));    // İSTANBUL"

let letter = 'I';

console.log(letter.toLocaleLowerCase('en-US')); // i
console.log(letter.toLocaleLowerCase('tr-Tr')); // ı


console.log("\n");
console.log("***************************************************");
console.log("* trim - trimStart(trimLeft) - trimEnd(trimRight) *");
console.log("***************************************************");
console.log("\n");


let foo = "        foo      ";

console.log(foo);         // "        foo      "
console.log(foo.trim());  // "foo"

console.log(foo.trimStart()); // "foo       "
console.log(foo.trimLeft());  // "foo       "

console.log(foo.trimEnd());    // "      foo"
console.log(foo.trimRight());  // "      foo"      


console.log("\n");
console.log("***************************************************");
console.log("*            toString - valueOf - raw             *");
console.log("***************************************************");
console.log("\n");



let x = new String('Hello world');
console.log(x.toString()); // 'Hello world'
console.log(x.valueOf());  // 'Hello world'



console.log(`This\n6`)  // this 
// 6
console.log(String.raw`This\n6`); // This\n6

