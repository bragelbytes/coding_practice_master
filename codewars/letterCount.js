function getStrings(city){
  let lowCity = city.toLowerCase()
  let cityName = {}
  let cityString = ""
  for(let i = 0; i < lowCity.length; i++){
    if(cityName[lowCity[i]] && lowCity[i] !== " "){
      cityName[lowCity[i]] += "*"
    } else if(lowCity[i] !== " ") {
      cityName[lowCity[i]] = "*"
    }
  }
  for(const key in cityName){
    cityString += `${key}:${cityName[key]},`
  }
  return cityString

}

console.log(getStrings("Chicago"))
console.log(getStrings("Las Vegas"))

console.log("dirt worm worm dirt dirt worm".split("dirt").length);
