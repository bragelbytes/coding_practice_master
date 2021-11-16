function reverseNumber(n){
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n)
}

console.log(reverseNumber(123))
console.log(reverseNumber(-123))
console.log(reverseNumber(1000))
console.log(reverseNumber(4321234))
console.log(reverseNumber(5))
console.log(reverseNumber(0))
console.log(reverseNumber(98989898))
