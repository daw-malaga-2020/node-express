const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 8080


http.createServer((req, res)=>{
  
  let currentRoute = req.url

  if(currentRoute ==='/' || currentRoute==='/index'){
    res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
        res.write(indexTemplate);
        res.end();
    }

  
    if(currentRoute ==='/generic'){
      res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
          res.write(genericTemplate);
          res.end();
      }
      
    
      if(currentRoute ==='/elements'){
        res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
            res.write(elementsTemplate);
            res.end();
        }  
  

}).listen(port)

console.log(`Servidor funcionando en http://localhost:${port}`)

const indexTemplate = fs.readFileSync('views/index.html', 'utf8')
const genericTemplate = fs.readFileSync('views/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('views/elements.html', 'utf8')
