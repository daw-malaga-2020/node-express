const fs = require('fs')

try {
  fs.appendFileSync('files/hola-mundo.txt', '\nOtro hola mundo')
} catch (error) {
  console.debug('No se ha podido añadir al fichero');
}
