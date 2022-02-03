function highestRank(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i] + 1){
      count++
    }
  }
  return count
}
arr = [12, 10, 8, 12, 7, 6, 4, 10, 12]
console.log(highestRank(arr));
