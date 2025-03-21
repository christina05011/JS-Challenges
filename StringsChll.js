/* 
---- Challenge 1
Create a Javascript string
*/

console.log('---- Challenge 1');
const text = 'Message ✨'; // New string
console.log('The value of text is: ' + text);

/* 
---- Challenge 2
Different ways to create Javascript strings
*/

console.log('---- Challenge 2');
let textOne = "textOne";    // Double quotes
let textTwo = 'textTwo';    // Single quotes
let textThree = `textThree`;  // Backticks (Template literals)

console.log(textOne);
console.log(textTwo);
console.log(textThree);

/* 
---- Challenge 3
Connect Javascript strings (1): Using addition operator
*/

console.log('---- Challenge 3');
console.log("Hello"+"World"); // Case to improve
console.log("Hello "+"World"); // Resolved: Added space between strings

/* 
---- Challenge 4
Connect Javascript strings (2): Using template literals
*/

console.log('---- Challenge 4');
let word = 'Challenge';
console.log(`The word is: ${word}`); // Using backticks

/* 
---- Challenge 5
Connect Javascript strings (3): Using template literals with expressions
*/

console.log('---- Challenge 5');
console.log(`The sum is: ${1 + 6}`); // Using backticks