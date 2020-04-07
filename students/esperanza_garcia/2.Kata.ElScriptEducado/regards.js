const actualTime = new Date().getHours()

const greeting = function (){
  if(actualTime > 6 && actualTime < 16){
    console.log("Buenos días")
  }
  if(actualTime > 15 && actualTime < 20){
    console.log("Buenas tardes")
  }
  if(actualTime < 7  && actualTime > 19){
    console.log("Buenas tardes")
  }
};
greeting()