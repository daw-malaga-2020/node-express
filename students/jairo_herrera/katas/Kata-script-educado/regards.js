const actualTime = new Date().getHours()

const saludo = function (){
  if(actualTime > 7 && actualTime < 15){
    console.log("Buenos días")
  }
  if(actualTime > 16 && actualTime < 19){
    console.log("Buenas tardes")
  }
  if(actualTime > 20  || actualTime < 6){
    console.log("Buenas Noches")
  }
  
};
saludo()
