var moveZeros = function (arr) {
  let zeroArr = []
  let zeroCounter = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      zeroArr.push(arr[i])
    } else if(arr[i] === 0) {
      zeroCounter++
    }
  }
  for(let j = 0; j < zeroCounter; j++){
    zeroArr.push(0)
  }
  return zeroArr
}
console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]))
