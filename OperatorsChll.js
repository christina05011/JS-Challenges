/* 
---- Challenge 1
Comparison operators - Equal
*/

console.log('---- Challenge 1');
const numOne = 5;
const numTwo = 5; // Same value instead of another different value
console.log(numOne == numTwo); // True

/* 
---- Challenge 2
Comparison operators - Not Equal
*/

console.log('---- Challenge 2');
const numFirst = 5;
const numSecond = 6; // Change to differente value instead of 5 (same value)
console.log(numFirst != numSecond); // True

/* 
---- Challenge 3
Comparison operators - Greater than
*/

console.log('---- Challenge 3');
function greaterThan(numOne, numTwo){
    return (numOne > numTwo);
}
console.log(`8 > 9: ${greaterThan(8, 9)}`); // False

/* 
---- Challenge 4
Comparison operators - Less than
*/

console.log('---- Challenge 4');
function lessThan(numOne, numTwo){
    return (numOne < numTwo);
}
console.log(`8 < 9: ${lessThan(8, 9)}`); // True

/* 
---- Challenge 5
Comparison operators - Greater than or equal
*/

console.log('---- Challenge 5');
let result = (numOne, numTwo) => numOne >= numTwo; // Using arrow function
console.log(`12 >= 12: ${result(12, 12)}`); // True

/* 
---- Challenge 6
Comparison operators - Less than or equal
*/

console.log('---- Challenge 6');
console.log(`11 <= 12: ${(11 <= 12) ? 'True result ✨' : 'False result ❌'}`); // True result ✨ --> Using ternary operator

/* 
---- Challenge 7
Comparison operators - Strict Equality
*/

console.log('---- Challenge 7');
console.log(11 === 12); // False

/* 
---- Challenge 8
Comparison operators - Strict Inequality
*/

console.log('---- Challenge 8');
console.log(11 !== 12); // True

/* 
---- Challenge 9
Logical operators - Logical AND
*/

console.log('---- Challenge 9');
console.log((25 < 30) && (30 < 50)); // True

/* 
---- Challenge 10
Logical operators - Logical OR
*/

console.log('---- Challenge 10');
console.log((25 > 30) || (30 > 50)); // False

/* 
---- Challenge 11
Arithmetic operators - Addition
*/

console.log('---- Challenge 11');
result = (numFst, numSnd) => numFst + numSnd; 
console.log(result(800, 900)); // 1700

/* 
---- Challenge 12
Arithmetic operators - Subtraction
*/

console.log('---- Challenge 12');
result = (numFst, numSnd) => numFst - numSnd; 
console.log(result(800, 900)); // -100

/* 
---- Challenge 13
Arithmetic operators - Multiplication
*/

console.log('---- Challenge 13');
result = (numFst, numSnd) => numFst * numSnd; 
console.log(result(10, 10)); // 100

/* 
---- Challenge 14
Arithmetic operators - Division
*/

console.log('---- Challenge 14');
result = (numFst, numSnd) => numFst / numSnd; 
console.log(result(10, 2)); // 5

/* 
---- Challenge 15
Arithmetic operators - Exponential
*/

console.log('---- Challenge 15');
result = (numFst, numSnd) => numFst ** numSnd; 
console.log(result(2, 3)); // 8

/* 
---- Challenge 16
Arithmetic operators - Remainder (or Modulus)
*/

console.log('---- Challenge 16');
result = (numFst, numSnd) => numFst % numSnd; 
console.log(result(5, 2)); // 1