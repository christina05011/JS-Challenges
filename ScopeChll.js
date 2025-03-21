/* 
---- Challenge 1
Correctly access function result
*/

console.log('---- Challenge 1');
function calculatePrice(price, tax) {
    let result = price + price * tax;
    return result; // Add return to access the variable
}
let total = calculatePrice(10, 2);
console.log(total);

/* 
---- Challenge 2
Correctly update global variable
*/

console.log('---- Challenge 2');
let x = 1;
function func() {
    x = 2; // Update global variable
}
func();
console.log(x === 2); // True

/* 
---- Challenge 3
Make use of function scope to return correct value
*/

console.log('---- Challenge 3');

let factor = 5;
function multiply() {
    let factor = 30; // A new variable is declared in this scope, allowing the same name to be used without affecting the global one
    let result = factor * 5;
    return result;
}

console.log(multiply() === 150); // True

/* 
---- Challenge 4
Sum global and local variable
*/

console.log('---- Challenge 4');
let x_ = 10;
{
    let y_ = 5;
    let result = x_ + y_; // Adjust scope here
    console.log(result === 15); // True
}
// console.log(result === 15); // Error because result is not in the global scope

/* 
---- Challenge 5
Correctly update global variable from within block
*/

console.log('---- Challenge 5');
let new_x = 56;
{
    new_x = 30; // New scope
}
console.log(new_x); // 30