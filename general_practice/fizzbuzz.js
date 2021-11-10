// Givin a list of numbers, create a program that reads back fizz for integers divisible by 3 and buzz for integers divisible by 5, and fizzbuzz if divisible by both

let arr = [1, 2, 3, 4, 5, 15, 75, 92]

// const fizzbuzz = () => {
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 3 === 0 && arr[i] % 5 ===0){
//       console.log(arr[i] + " fizzbuzz")
//     }
//     else if(arr[i] % 3 === 0){
//       console.log(arr[i] + " fizz")
//     }
//     else if(arr[i] % 5 === 0){
//       console.log(arr[i] + " buzz")
//     }
//   }
// }

// fizzbuzz()

const fizzbuzz = () => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
      console.log("fizzbuzz")
    } else if(arr[i] % 3 === 0){
       console.log(arr[i] + " fizz")
    } else if(arr[i] % 5 ===0){
       console.log("buzz")
    }
  }
}

fizzbuzz()
