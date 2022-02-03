function validBraces(braces){

  let bracedArr = []

  for(let i = 0; i < braces.length; i++){
    if(braces[i] === "(" || braces[i] === "{" || braces[i] === "[" ){
      bracedArr.push(braces[i])
    } else {
      if(bracedArr.length === 0){
        return false
      }
      let lastBracedArr = bracedArr[bracedArr.length - 1]
      if((braces[i] === ")" && lastBracedArr === "(") || (braces[i] === "}" && lastBracedArr === "{") || (braces[i] === "]" && lastBracedArr === "[")){
        bracedArr.pop()
      }
    }
  }
  if(bracedArr.length === 0){
    return true
  } else {
    console.log(bracedArr)
    return false
  }
}
console.log(validBraces("()"));
console.log(validBraces("(){}[]"))
console.log(validBraces("([{}])"))
console.log(validBraces("(}")) //false
console.log(validBraces("[({})](]")) //false
