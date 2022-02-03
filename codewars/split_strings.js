function solution(str){
  let splitArr = []
  if(str.length % 2 === 1){
     str += "_"
   }
  for(let i = 0; i < str.length; i+=2){
    let segment = str[i] + str[i+1]
    splitArr.push(segment)
  }
  return splitArr
}
console.log(solution("abcdefg"))
