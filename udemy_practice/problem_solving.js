//=========UNDERSTAND THE PROBLEM=====================//

//example task
//write a function which takes two numbers and returns their sum

//1. Can I restate the problem in my own words?
//"implement addition"

//2.What are the inputs that into the problem?
//"ints? floats? string for large numbers?"

//3.What are the outputs that should come from the solution to the problem?
//"int? float? string?"

//4.Can the outputs be determined from the inputs? (i.e. do I have enough
//information to solve the problem?)
//"are things like null a valid answer?"

//5.How should I label the important pieces of data that are a part of the problem?
//"num1 + num2 = sum"

//==============================================//

//============EXPLORE EXAMPLES======================//

//-coming up with examples helps you understand the problem better
//*start with simple examples*
//*progress to more complex examples*
//*explore examples with empty inputs*
//*explore examples with invalid inputs*

//example task
//"write a function which takes in a string and returns counts of each
//character in the string"

// charCount("aaaa") //{a:4}
// charCount("hello") //{h:1, e:1, l:2, o:1}
//"what about setting all letters to 0 initially"

//charCount("My phone number is 543464")
//how do we handle numbers or other characters? do we want to count spaces?
//do we account for uppper and lower case?

//edge cases
// charCount("") //do we want to return null? an empty string?

//=================================================//

//===============BREAK IT DOWN================//

//example task
//"write a function which takes in a string and returns counts of each
//character in the string"

// charCount("aaaa") //{a:4}
// charCount("hello") //{h:1, e:1, l:2, o:1}

//*interviewer said we only need to account for alphanumeric characters
//and return the object as lowercase*//

// function charCount(str){
//   //do something
//   //return an object with keys that are lowercase alphanumeric characters
//   //in the string;
// }

// function charCount(str){
  //make object to return at the end
  //loop over string, for each character
    //if the char is a number/letter AND is a key in object, add one to count
    //if the char is a number/letter AND not in object,
    //add it to object and set value to 1
    //if character is something else(space, period, etc) don't do anything
  //return object
// }

//==============================================//

//=========================SOLVE / SIMPLIFY===========//

//SOLVE THE PROBLEM! if you can't...solve a simpler problem
//*find the core difficulty in what you are truing to do*
//*temporarily ignore that difficulty*
//*write a simplified solution*
//*then incorperate that difficulty back in*

// function charCount(str){
//   //make object to return at the end
//   let result = {};
//   //loop over string, for each character
//   for(let i = 0; i < str.length; i++){
//     let char = str[i].toLowerCase()
//     //if the char is a number/letter AND is a key in object, add one to count
//     if(/[a-z0-9]/.test(char)){ //.test to search for specifically a-z and 0-9
//       if(result[char] > 0){
//         result[char]++
//         //if the char is a number/letter AND not in object,
//         //add it to object and set value to 1
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//
//     //if character is something else(space, period, etc) don't do anything
//   //return object
//   return result;
// }

//refactored version
function charCount(str){
  let result = {};
  for(let char of str){
    char = char.toLowerCase()
    if(/[a-z0-9]/.test(char)){
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

console.log(charCount("My name is Joe, my favorite number is 21"));
//=================================================//
