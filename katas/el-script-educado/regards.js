const currentHour = new Date().getHours()

let regardPart = getRegard(currentHour)

console.log(`${regardPart} people!`)
console.log(`${regardPart} to all!`)

function getRegard(hour){

  if(hour >= 7 && hour <= 15){
    return "Good morning"
  }

  if(hour > 15 && hour <= 20){
    return "Good afternoon"
  }

  return "Good night"
}
