// // let str = "hello";
// // str[1] = "word";

// console.log(str);

const str = "Hello, world!";

// Using slice() with a non-numeric parameter
console.log(str.slice("abc")); // Output: "Hello, world!"
console.log(str.slice("1", "abc")); // Output: ""

// Using substring() with a non-numeric parameter
console.log(str.substring("abc")); // Output: "Hello, world!"
console.log(str.substring("1", "abc")); // Output: ""


let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

var x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345) 
console.log(typeof y);

var x = Number.MAX_SAFE_INTEGER; 
console.log(x);

var x = Number.MIN_SAFE_INTEGER; 
console.log(x);

console.log(x.isInteger(x));
