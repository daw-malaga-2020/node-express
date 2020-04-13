const express = require('express')

const app = express()
const port = process.env.PORT || 8080

const apiResponsiveHeaderVersionMiddleWare = require('./response-api-version-header')
function myFirstMiddleware (req,res,next){
  console.info('akfosjfilojsf')
  next()
}
app.use(myFirstMiddleware)
app.get('/', (req, res)=>{
 res.send(`Esto funciona`)
})

app.listen(port, (res,req)=>{
  console.info(`El servidor está corriendo en http://localhost:${port}`)
})
