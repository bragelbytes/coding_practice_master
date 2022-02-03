function shortcut(string){
  let noVowel = ""
  for(let i = 0; i < string.length; i++){
    if(string[i] !== "a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" && string[i] !== "u"){
      noVowel += string[i]
    }
  }
  return noVowel
}

console.log(shortcut("hello"))
console.log(shortcut("codewars"))
console.log(shortcut("HELLO"))
console.log(shortcut("how are you today?"))
