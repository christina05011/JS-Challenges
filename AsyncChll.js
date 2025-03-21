/* 
---- Challenge 1
Execute the code synchronously
*/

console.log('---- Challenge 1');
// Linear code example:
let y = 1;
y = 2;
console.log(y); // 2

/* 
---- Challenge 2
Execute the code asynchronously
*/

console.log('---- Challenge 2');
let x = 0;
/* Function to be tested:

setTimeout(() => {
    x = 2;
}, 1000);

*/
// Method 1: Using async/await
(async function(){
    await setTimeout(() => {
        x = 1;
        console.log('Method 1: ', x); // 2 --> After 1 second (first async function)
    }, 1000);
})();

// Method 2: Using promise
const valueX = new Promise(function ()
{
    setTimeout(function(){
        x = 2;
        console.log('Method 2: ', x); // 2 --> After 1 second (second async function)
    }, 1000);
});

console.log('Linear code: ', x); // 1 (always first) --> Single thread, before async prints

/* 
---- Challenge 3
Correctly use callback function
*/

console.log('---- Challenge 3');
// Function receives another function as an argument
function getValue(func, val) {
    func(val); // Call the function 'func'
}

getValue((value) => {
    console.log(`The value is: ${value}`); // Print the value
}, 5); // 5

/* 
---- Challenge 4
Use a callback function to log output
*/

console.log('---- Challenge 4');
function multiply(a, b) {
    return a * b;
}

function getValue(func, val1, val2) { // Receives params of callback function 'multiply'
    return func(val1, val2); // Call the function 'func'
}

console.log(`The multiplication is: ${getValue(multiply, 2, 5)}`); // 10

/* 
---- Challenge 5
Correctly resolve promise
*/

console.log('---- Challenge 5');
const myPromise = new Promise((resolve, reject) => { // New Promise
    (Math.random() < 0.5) // Random value
        ? resolve("Resolve this promise correctly") // Fulfilled state
        : reject(new Error("Rejected promise")); // Rejected state
});

myPromise
    .then(value => console.log("✨ Fulfilled:", value)) // All good -> Fulfilled state
    .catch(err => console.log("❌ Rejected =>", err)); // Error -> Rejected state

/* 
---- Challenge 6
Get asynchronous result with Promise
*/

console.log('---- Challenge 6');
let data = "Initial value"; // Variable to be updated if all is good

const otherPromise = new Promise((resolve, reject) => { // Async promise
    setTimeout(() => {
        if (Math.random() < 0.5) { data = "Updated value"; resolve(data); } // Fulfilled state
        else reject(new Error("Empty data")); // Rejected state
    }, 1000);
});

otherPromise
    .then(data => console.log("✨ Full:", data)) // All good -> Fulfilled state
    .catch(err => console.log("❌ Empty =>", err)); // Error -> Rejected state

console.log("⏳ Initial:", data); // Initial value --> Linear flow

/* 
---- Challenge 7
Wait for Promise to resolve
*/

console.log('---- Challenge 7');
data = 5; // Initial value

const lastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        data = Math.floor(Math.random() * 5) + 1; // Generate random value
        console.log(`🆕 New value of data: ${data}`);
        if(data > 2.0) resolve(data); // Returns data --> Fulfilled state
        else reject(`The data is less than 2.0 or equal: ${data}`); // Returns message --> Rejected state
    }, 1000); // Wait 1 second
});

lastPromise
    .then(res => console.log(`✨ Accepted value of result: ${multiply(res, res + 5)}`)) // All good -> Fulfilled state
    .catch(err => console.log("❌ NOT accepted value of result =>", err)); // Error -> Rejected state

console.log(`⏳ Initial value of data: ${data}`);
console.log(`⏳ Initial value of result: ${multiply(data, data + 5)}`); // Call function with initial value of data