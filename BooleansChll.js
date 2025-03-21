/* 
---- Challenge 1
Assign boolean to a variable
*/

console.log('---- Challenge 1');
let isTrue;
isTrue = true; // Value assigned
console.log(isTrue);

/* 
---- Challenge 2
Convert Number to Boolean
*/

function convertToBoolean(number){
    return Boolean(number);
}
console.log('---- Challenge 2');
console.log(convertToBoolean(5)); // Truthy value
console.log(convertToBoolean(0)); // Falsy value