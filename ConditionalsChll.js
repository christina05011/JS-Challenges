/* 
---- Challenge 1
if statement - satisfy condition
*/

console.log('---- Challenge 1');
let num = 0;
if (1 < 2) { // Change > operator to < operator (satisfy condition)
   num = 1;
}
console.log(num === 1); // True

/* 
---- Challenge 2
if statement - add missing condition
*/

console.log('---- Challenge 2');
let text;
if (!text) { // Add missing condition
   text = 'New text value';
}
console.log((typeof text) === "string"); // True

/* 
---- Challenge 3
if...else statement - run else
*/

console.log('---- Challenge 3');
if (num < 5) {
    num += 8;
}
else { // Add else statement
    num--;
}
console.log(num > 5); // True

/* 
---- Challenge 4
if statement - test multiple conditions
*/

console.log('---- Challenge 4');
let numOne = 10;
let numTwo = 12;

if (numOne < 50 && numOne < numTwo) { // Add multiple expressions
    numOne += 8;
    numTwo = 6;
}

if (numTwo === 6) { // Add strictly condition
    console.log(`numTwo is: ${numTwo}`);
}
console.log(numOne > 5); // True

/* 
---- Challenge 5
else-if
*/

console.log('---- Challenge 5');
let text_;
num = 1.5;
if(num > 2) {
    text_ = `${num} is greater than 2`;
}
else if(num > 1) {
    text_ = `${num} is greater than 1`;
}
else {
    text_ = `${num} is less than 2`;
}

console.log(text_);

/* 
---- Challenge 6
Conditional (ternary) operator
*/

console.log('---- Challenge 6');
num = 9;
console.log((num <= 3) ? 'num is less than or equal 3' : 'num is greater than 3');