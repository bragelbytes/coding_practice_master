//this is just to use the performance command
const performance = require("perf_hooks").performance

//write a function that calculates the sum of all numbers from 1 up to
//(and including ) some number n.

//===========time complexity=================//

//example1
// 0(n) time
function addUpTo(n){
  let total = 0;
  for (let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

var t1 = performance.now()
addUpTo(1000000000);
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);


//example2
// O(1) time
function addUpTo(n){
  return n * (n + 1) / 2;
}

var t1 = performance.now()
addUpTo(1000000000);
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//example3
//O(n^2) time
function printAllPairs(n){
  for(let i = 0; i < n; n++){
    for(let j = 0; j < n; j++){
      console.log(i, j);
    }
  }
}

//example4 log 1 through n and at least through 5
// O(n) because n still grows in proportion with number of operations
function logAtLeast5(n){
  for(let i = 1; i <= Math.max(5, n); i++){
    console.log(i);
  }
}
logAtLeast5(10)
logAtLeast5(3)

//example5 log 1 through n and at most through 5
// 0(1) time. as n grows it is constant
function logAtMost5(n){
  for(let i = 1; i <= Math.min(5, n); i++){
    console.log(i);
  }
}
logAtMost5(30)
logAtMost5(3)

//===========================//

//===================space complexity===========//

//example1
// O(1) space
function sum(arr){
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

//example2
//simplified down to O(n) space
function double(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
console.log(double([1,2,3]));


//==============================================//

//=========Big O (Objects)======================//

//Insertion - O(1)
//Removal - O(1)
//Searching - O(n)
//Access - O(1)

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}

//Object.keys - O(n)
//Object.values - O(n)
//Object.entries - O(n)
//hasOwnProperty - O(1)

console.log(Object.keys(instructor));
// [ 'firstName', 'isInstructor', 'favoriteNumbers' ]
// O(n) as the number of items grows they will be inserted into array

console.log(Object.entries(instructor));
// [
//    [ 'firstName', 'Kelly' ],
//    [ 'isInstructor', true ],
//    [ 'favoriteNumbers', [ 1, 2, 3, 4 ] ]
// ]
// O(n) a bit more work but still simplifies to 0(n)

console.log(instructor.hasOwnProperty("firstName"));
//true
// O(1) this will happen in constant time there is nothing to "grow"

//==============================================//

//===================Big O (Arrays - Ordered Lists)================//

//Insertion - (at the end) O(1) or (somewhere else) O(n)
//push and pop are always faster than shift and unshift
//Removal - (at the end) O(1) or (somewhere else) O(n)
//Searching - O(n)
//Access - O(1)

let names = ["Mazzy", "Barnabe", "Joe", "Elaine"]
let values = [true, {}, [], 2, "awesome"]

// push - O(1)
// pop - O(1)
// shift - O(n)
// unshift - O(n)
// concat - O(n)
// slice - O(n)
// sort - O(n * log n)
// forEach/map/filter/reduce/etc. - O(n)

//================================================//
