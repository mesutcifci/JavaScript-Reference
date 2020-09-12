/* e */

let number = 1000000000;

console.log(1e9 == number) // true
console.log(2.15e3 == (2.15  * 1000)); // true
console.log(4e-4 == 0.0004) // true

console.log("--------------------------");

/* num.toString(base) */

number = 255;

console.log(number.toString(16)); // ff
console.log(number.toString(2));  // 11111111
console.log(25578782142..toString(36)); // br0y2m6

console.log("--------------------------");

/* Parse */

let text_1 = "12.53aadd";
let text_2 = "aadd12.53";
console.log(Number.parseFloat(text_1)); // 12.53
console.log(Number.parseFloat(text_2)); // NaN
console.log(Number.parseFloat("12.53", "aa")); //12.53
console.log(Number.parseFloat("aa", 12.53)); // NaN
console.log(Number.parseInt(text_1)); // 12

console.log("--------------------------");

/* isInteger */

console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5 / 2));  // false
console.log(Number.isInteger(5.0));  // true
console.log(Number.isInteger("10")); // false

console.log("--------------------------");

/* toFixed */

let number_1 = 123.457;
let number_2 = 123.447;
let number_3 = 123.443;

console.log(number_1.toFixed());  // 123

console.log(number_1.toFixed(1)); // 123.5 rounds up
console.log(number_2.toFixed(1))  // 123.4 rounds down

console.log(number_1.toFixed(2)); // 123.46 rounds up
console.log(number_2.toFixed(2)); // 123.45 rounds up
console.log(number_3.toFixed(2)); // 123.44 rounds down

console.log(number_1.toFixed(3)); // 123.457
console.log(number_1.toFixed(4)); // 123.4570 

console.log(typeof (number_1.toFixed())); // string

/* toPrecision */

console.log("--------------------------");

console.log(number_1.toPrecision());  // 123.457

console.log(number_1.toPrecision(1)); // 1e+2
console.log(number_2.toPrecision(1))  // 1e+2

console.log(number_1.toPrecision(2)); // 1.2e+2
console.log(number_2.toPrecision(2)); // 1.2e+2
console.log(number_3.toPrecision(2)); // 1.2e+2

console.log(number_1.toPrecision(3)); // 123
console.log(number_1.toPrecision(4)); // 123.5

console.log(typeof (number_1.toPrecision())); // string 

/* Math */

console.log("--------------------------");

console.log(Math.abs(-555)); // 555
console.log(Math.pow(5, 3));  // 125

console.log(Math.floor(5.4)); // 5
console.log(Math.floor(5.7)); // 5

console.log(Math.ceil(5.4)); // 6
console.log(Math.ceil(5.7)); // 6

console.log(Math.round(5.4)); // 5
console.log(Math.round(5.7)); // 6

console.log(Math.trunc(785.4758)); // 785

console.log(Math.min(1, 5, -7, 21)); // -7
console.log(Math.max(1, 5, -7, 21)); // 21

console.log(Math.random()); // returns a number  between 0 - 1 

console.log(Math.sqrt(36)); // 6
console.log(Math.cbrt(512)) // 8
console.log(Math.hypot(6, 8)); // 10

/* Date Constructor*/

console.log("--------------------------");

let date_1 = new Date();
console.log(date_1); // returns current date

// year - month - day - hour -second - msecond
let date_2 = new Date(2010, 5, 24, 13, 42, 27, 56);
console.log(date_2); // Thu Jun 24 2010 13:42:27 GMT+0300 (GMT+03:00)

let date_3 = new Date(1995);
console.log(date_3); // Thu Jan 01 1970 02:00:01 GMT+0200 (GMT+03:00)

let date_4 = new Date(1995, 11);
console.log(date_4); // Fri Dec 01 1995 00:00:00 GMT+0200 (GMT+03:00)

let date_5 = new Date("");

console.log("--------------------------");

/* Date.parse - Date.now - Date.UTC*/

// returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now()); 

const theTime = Date.parse("01 jan 1970 00:00:01 GMT");
console.log(theTime); // 1000

const utcTime = new Date(Date.UTC(1995, 11)); // Fri Dec 01 1995 02:00:00 GMT+0200 (GMT+03:00)
console.log(utcTime);

console.log("--------------------------");

// getFullYear - getMonth - getDate - getDay - getHours - getMinutes - getSeconds - getMilliSeconds 
// Also set merhods available 

// let birthday = new Date("August 11, 2011 08:16:24:600"); invalid format(also valid without ms)
// important! 0 = jan, 1 = feb etc...
let birthday = new Date(2011, 7, 11, 8, 16, 24, 500);


console.log(birthday.getFullYear()); // 2011
console.log(birthday.getMonth());    // 7

console.log(birthday.getDate()); // 11
console.log(birthday.getDay());  // 0 (meaning sunday)

console.log(birthday.getHours());    // 8
console.log(birthday.getMinutes());  // 16
console.log(birthday.getSeconds());  // 24
console.log(birthday.getMilliseconds()); // 600

console.log("--------------------------");

var theBigDay = new Date('July 1, 1999');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());

console.log(theBigDay);    // Thu Jul 01 1999 00:00:00 GMT+0300 (GMT+03:00)
console.log(sameAsBigDay); // Thu Jul 01 1999 00:00:00 GMT+0300 (GMT+03:00)

console.log("--------------------------");

var dd = new Date(birthday.getMilliseconds());
console.log(dd); // Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)
dd = new Date(Date.now());
console.log(dd); // Sat Sep 12 2020 13:30:58 GMT+0300 (GMT+03:00)

console.log("--------------------------");

// toDateString - toISOString -toJSON - toLocaleDateString - toLocaleString - toLocaleTimeString
// toString - toTimeString
let catDay = new Date(2222, 11, 19, 8, 7, 6, 400);

console.log(catDay.toDateString()); // Thu Dec 19 2222
console.log(catDay.toISOString());  // 2222-12-19T05:07:06.400Z
console.log(catDay.toJSON());       // 2222-12-19T05:07:06.400Z

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timezone: 'UTC'};

console.log(catDay.toLocaleDateString('tr-TR')); // 19.12.2222
console.log(catDay.toLocaleDateString('tr-TR', options)); // 19 Aralık 2222 Perşembe

console.log(catDay.toLocaleString()); // 12/19/2222, 8:07:06 AM
console.log(catDay.toLocaleString('tr-TR')); // 19.12.2222 08:07:06
console.log(catDay.toLocaleString('tr-TR', options)); // 19 Aralık 2222 Perşembe

console.log(catDay.toLocaleTimeString()); // 8:07:06 AM
console.log(catDay.toLocaleTimeString('tr-TR')); // 08:07:06
console.log(catDay.toLocaleTimeString('tr-TR', options)); // 19 Aralık 2222 Perşembe 08:07:06

console.log(catDay.toString()); // Thu Dec 19 2222 08:07:06 GMT+0300 (GMT+03:00)
console.log(catDay.toTimeString()); // 08:07:06 GMT+0300 (GMT+03:00)

console.log("--------------------------");

// valueOf - Date()[Symbol.toPrimitive](hint);

console.log(catDay.valueOf()); // 7982773626400

const testTime = new Date(12458743267);

console.log(testTime[Symbol.toPrimitive]('default')); // Mon May 25 1970 06:45:43 GMT+0200 (GMT+03:00)
console.log(testTime[Symbol.toPrimitive]("string"));  // Mon May 25 1970 06:45:43 GMT+0200 (GMT+03:00)
console.log(testTime[Symbol.toPrimitive]("number"));  // 12458743267

console.log("--------------------------");

console.log(new Date().getTimezoneOffset()); // -180 