/* 
---- Challenge 1
Function declaration
*/

console.log('---- Challenge 1');
function func() { // Function declaration
    return 'hello world';
};
const result = func();
console.log(result);

/* 
---- Challenge 2
Function expression
*/

console.log('---- Challenge 2');
console.log(func()); // Add () after func

/* 
---- Challenge 3
Correctly return value from function (1)
*/

console.log('---- Challenge 3');
function func_() {
    let text = "Hello, world!";
    return text; // Add the missing return statement
}

let result_ = func_();
console.log(result_);

/* 
---- Challenge 4
Correctly return value from function (2)
*/

console.log('---- Challenge 4');
function func_chll4() {
    let text = "hello";
    // return text; // Line commented to avoid premature return

    text = "hello world";
    return text;
}

let result_chll4 = func_chll4();
console.log(result_chll4);

/* 
---- Challenge 5
Functions - parameters and arguments (1)
*/

console.log('---- Challenge 5');
function multiply(num) {
    return num * num;
}

console.log(multiply(5) === 25); // True

/* 
---- Challenge 6
Functions - parameters and arguments (2)
*/

console.log('---- Challenge 6');
function multiplyNumbers(numOne, numTwo) {
    return numOne * numTwo;
}

console.log(multiplyNumbers(5, 4) === 20); // True

/* 
---- Challenge 7
Functions - parameters and arguments (3)
*/

console.log('---- Challenge 7');
function concatText(a, b){
    return a + " " + b;
}
console.log(concatText('hello', 'world')); // Add both params

/* 
---- Challenge 8
Return early from function
*/

console.log('---- Challenge 8');
function square(num) {
    if (num < 5) {
        return; // Return early
    }
    return num ** 2;
}

console.log(square(5) === 25); // True

