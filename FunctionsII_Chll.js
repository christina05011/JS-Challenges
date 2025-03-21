/* 
---- Challenge 1
Declare a rest parameter
*/

console.log('---- Challenge 1');
function func(...x) // Rest parameter
{
    console.log(x); // [...]
    return x.length;
}
console.log(func(1,2) === 2); // True

/* 
---- Challenge 2
Change function parameters
*/

console.log('---- Challenge 2');
function add(a, b, c) {
    return a + b + c;
}
console.log(add(5, 3, 7) === 15); // True --> Adjust to have 3 values instead of 2

/* 
---- Challenge 3
Tranform to arrow function
*/

console.log('---- Challenge 3');
// Function to be transformed:
const multiply = function(a, b, c) {
    return a * b * c;
};
console.log(multiply(2, 3, 4) === 24); // True

//Transform into an arrow function:
let result = (a, b, c) => a * b * c;
console.log(result(2, 3, 4) === 24); // True

/* 
---- Challenge 4
Shorten arrow function
*/

console.log('---- Challenge 4');
// Function to be transformed:
const divide = (a, b) => {
    return a / b;
};
console.log(divide(5, 10) === 0.5); // true

//Shorten function:
result = (a, b) => a / b;
console.log(result(5, 10) === 0.5); // true

/* 
---- Challenge 5
Create arrow function I
*/

console.log('---- Challenge 5');
result = (a, b) => a + b;
console.log(result(10, 20)); // 30

/* 
---- Challenge 6
Create arrow function II
*/

console.log('---- Challenge 6');
result = (x, ...arr) => [x, arr];
console.log(result(1,2,3,4)); // [ 1, [ 2, 3, 4 ] ]