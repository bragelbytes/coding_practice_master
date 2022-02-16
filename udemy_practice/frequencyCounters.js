//===============PROBLEM SOLVING PATTERNS===================//

//"Frequency Counters"
//This pattern uses objects or sets to collect values/frequencies of values
//This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

//**Example 1.** Write a function called "same", which accepts two arrays.
//The function should return true if the every value in the array has it's
//corresponding value squared in the second array. The frequency of values
//must be the same.

// Example 1 "naive approach" O(n^2)
// function same(arr1, arr2){
//   if(arr1.length !== arr2.length){ //if array is different length return false
//     return false;
//   }
//   for(let i = 0; i < arr1.length; i++){
//     //check for the index of the squared version of each number in array
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)
//     //if the index is -1 then it is false
//     if(correctIndex === -1){
//       return false;
//     }
//     //if it has an index splice, remove from array, until true
//     console.log(arr2);
//     arr2.splice(correctIndex,1)
//   }
//   return true;
// }
// //we used splice because otherwise the method would have to remember array
// //position as it checks each number
//
// console.log(same([1,2,3], [4,1,9])); //true
// console.log(same([1,2,3], [1,9])); //false
// console.log(same([1,2,1], [4,4,1])); //false (must be same frequency)


//Example 1 Refactored - O(n) or roughly O(3n)
// function same(arr1,arr2){
//   if(arr1.length !== arr2.length){
//     return false;
//   }
//   let frequencyCounter1 = {} //object that will count number of indivual values in array
//   let frequencyCounter2 = {}
//   //here we loop over each array 1 time individually which is better than nesting
//   for(let val of arr1){ //for each val in array 1, add 1 or initialize as 1
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//   }
//   for(let val of arr2){ //for each val in array 2, add 1 or initialize as 1
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   for(let key in frequencyCounter1){ //checks that the squared number appears the correct amount of times
//     if(!(key ** 2 in frequencyCounter2)){ //is the current number squared a key in frequencyCounter2?
//       return false //if not, return false
//     }
//     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ //is the correct amount of that key in frequencyCounter2?
//       return false //if not, return false
//     }
//   }
//   // console.log(frequencyCounter1);
//   // console.log(frequencyCounter2);
//   return true
// }
//
// console.log(same([1,2,3,2], [4,1,9,4])); //true
// console.log(same([1,2,3,2,5], [4,1,9,4,11])); //false
// console.log(same([1,2,3], [1,9])); //false
// console.log(same([1,2,1], [4,4,1])); //false (must be same frequency)


//**Example 2** Anagrams - Given two strings, write a function to determine if
//the second string is an anagram of the first. An anagram is a word, phrase, or
//name formed by rearranging the letters of another.

function validAnagram(arr1, arr2){
  //determine if the arrays are the same size
  if(arr1.length !== arr2.length){
    return false
  }
  //build frequency counters for our words with objects and loops
  //build two empty objects for our words
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  //loops to count letters and store values in our objects
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  //make keys and compare the objects
  for(let key in frequencyCounter1){
    //do both objects share the same keys?
    if(!(key in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key] !== frequencyCounter1[key]){
      return false
    }
  }
  //as long as we didn't hit any criteria to return false then it must be true
  return true
}

//tests
console.log(validAnagram("","")); //true
console.log(validAnagram("aaz","zza")); //false
console.log(validAnagram("anagram","nagaram")); //true
console.log(validAnagram("rat","car"));//false
console.log(validAnagram("awesome","awesom"));//false
console.log(validAnagram("qwerty","qeywrt")); //true
console.log(validAnagram("texttwisttime","timetwisttext"));

//==========================================================//
