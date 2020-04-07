/* Puerto */
const serverPort = process.env.PORT || 8080

/* Importar el modulo fs */
const fs = require('fs')


const indexTemplate = fs.readFileSync('index.html', 'utf8')
const elementsTemplate = fs.readFileSync('elements.html','utf8')
const genericTemplate = fs.readFileSync('generic.html', 'utf8')

/* función de cambiar la url */

const isValidRoute = function(route) {
  return  (route === '/' ||
  route === '/index' ||
  route === '/generic'||
  route === '/elements')

};
 function ownFunctionServer (req, res) {

  let currentRoute = req.url
  console.log(currentRoute)

  if(currentRoute === '/' || currentRoute === '/index'){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    res.write(indexTemplate)
    res.end()
  }
  if(currentRoute === '/generic'){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    res.write(genericTemplate)
    res.end()
  }
  if(currentRoute === '/elements'){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    res.write(elementsTemplate)
    res.end()
  }
}
/* Creando el servidor */
const http = require('http')

http.createServer(ownFunctionServer).listen(serverPort)

