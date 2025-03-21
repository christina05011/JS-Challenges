/* 
---- Challenge 1
for loop I - creating JavaScript loops
*/

console.log('---- Challenge 1');
let result = 0;
for(let i = 1; i < 3; i++){
    console.log(i);
    result += i;
}
console.log(result === 3);

/* 
---- Challenge 2
for loop II - looping through an array
*/

console.log('---- Challenge 2');
let newArray = [];
let mixed = [1, 'a', 2.3, true];
for(let i of mixed){
    if(typeof i === 'number'){
        newArray.push(i);
    }
}
console.log(newArray);

/* 
---- Challenge 3
for loop III - abort running loop
*/

console.log('---- Challenge 3');
newArray = [];
for(let i of mixed){
    if(typeof i === 'number') newArray.push(i);
    else break;
}
console.log(newArray);

/* 
---- Challenge 4
while loop
*/

console.log('---- Challenge 4');
let num = 0;
while(num < 60){
    num += 2;
}
console.log(num === 60);