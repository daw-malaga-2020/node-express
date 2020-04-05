const fs = require('fs')

let data = fs.readFileSync('./files/hola-mundo.txt', 'utf8')

console.log(data)
