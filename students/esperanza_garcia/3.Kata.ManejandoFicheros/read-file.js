const fs = require('fs')

let data = fs.readFileSync("hola-mundo.txt", "utf8")
console.log(data)