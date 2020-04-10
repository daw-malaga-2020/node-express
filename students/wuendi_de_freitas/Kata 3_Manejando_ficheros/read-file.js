const fs = require('fs')

let data = fs.readFileSync("Hola-mundo.txt", "utf8")

console.log(data)