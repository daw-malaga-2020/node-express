const fs = require('fs')

try{
    fs.writeFileSync("files/hola-mundo.txt","Hola mundo")
}catch(error){
    console.debug("No se ha podido crear el fichero");
}
