const fs = require('fs')

try {
  fs.unlinkSync('files/hola-mundo.txt')
} catch (error) {
  console.debug('no se ha podido borrar el fichero');
}
