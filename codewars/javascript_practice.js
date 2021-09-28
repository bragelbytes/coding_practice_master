function swapVowelCase(str) {
  let vowels = "aeouiAEOUI" //define the vowels
  let vowelsArr = vowels.split('') //redifine as an array
  let newStr = str.split("") //new string that is array of string we feed in
  for(let i = 0; i < str.length; i++){ //loop throught test string
    for(let j= 0; j < vowelsArr.length; j++){ //loop through vowels
      if(str[i] === vowelsArr[j]){
        if(str[i] === str[i].toUpperCase()){
          newStr.splice(i,1,str[i].toLowerCase())
        }
        if(str[i] === str[i].toLowerCase()){
          newStr.splice(i,1,str[i].toUpperCase())
        }
      }
    }
  }
  return newStr.join("")
}
