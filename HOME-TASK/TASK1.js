let num1 = parseFloat(prompt("ENTER THE FIRST NUMBER:"));
let num2 = parseFloat(prompt("ENTER THE SECOND NUMBER:"));
const operator = "Simple JS Calculator";
let creator = "Yuvaraj";

let sum = num1 + num2;
let diff = num1 - num2;
let product = num1 * num2;
let quotient = (num2 !== 0) ? (num1 / num2) : "Cannot divide by zero";
let modulus = (num2 !== 0) ? (num1 % num2) : "Cannot perform modulus by zero";

console.log("== Operators ==");
console.log(`Creator: ${creator}`);
console.log(`Number 1: ${num1}`);
console.log(`Number 2: ${num2}`);
console.log(`Difference: ${diff}`);
console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Modulus: ${modulus}`);
