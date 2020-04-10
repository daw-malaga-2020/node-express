var date = new Date; 
var hour = date.getHours();  

    if (hour >= 7 && hour <= 15){
        console.log ('buenos dias')
    }
    else if (hour >= 16 && hour <= 19){
        console.log('buenas tardes')
    }
    else{
        console.log('buenas noches')
    }
        
    