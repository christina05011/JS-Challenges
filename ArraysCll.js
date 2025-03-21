/* 
---- Challenge 1
Create a JavaScript array
*/

console.log('---- Challenge 1');
let arr = [1, 2];
arr.push(3); // Add an element to have 3 elements
console.log(arr.length === 3); // True

/* 
---- Challenge 2
Access an array element
*/

console.log('---- Challenge 2');
console.log(arr[0]); // 1 --> Access to the first element of the array

/* 
---- Challenge 3
Write function to get last element of an array
*/

console.log('---- Challenge 3');
function lastElement(arr){
    return arr[arr.length - 1];
}
console.log(`The last element is ${lastElement(arr)}`);
console.log(`The last element is ${lastElement([4,5,6])}`);

/* 
---- Challenge 4
Create a JavaScript array using variables
*/

console.log('---- Challenge 4');
arr = ['x', arr, [3, 4, 5], 'string'];
console.log(`The new arr is: ${arr}`);
console.log(arr[0] === 'x'); // True

/* 
---- Challenge 5
Find the index of an array element
*/

console.log('---- Challenge 5');
arr = ['apple', 'banana', 'cherry'];
const value = arr[arr.indexOf('banana')]; 
console.log(value === 'banana'); // True

/* 
---- Challenge 6
Add element to array
*/

console.log('---- Challenge 6');
arr = [1, 2, 3]
arr.push(4);
console.log(arr);
console.log(arr.indexOf(4));
console.log(arr[arr.length - 1] === 4); // True
