const express = require('express')
const app = express()
const fs = require('fs')

const port= process.env.PORT || 8080
let visits = 0;

const indexTemplate = fs.readFileSync('./index.html', 'utf8')
const genericTemplate = fs.readFileSync('./generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('./elements.html', 'utf8')
const notFoundTemplate = fs.readFileSync('./404notFound.html', 'utf8')

function visitCounter (req, res, next){
  visits++
  console.info(visits)
  next()
}


app.get('/',visitCounter, (req, res)=>{
  console.log(visitCounter)
  res.send(indexTemplate)
})
app.get('/index',(req, res)=>{
  res.redirect('/')
})
app.get('/generic',(req, res)=>{
  res.send(genericTemplate)
})
app.get('/elements',(req, res)=>{
  res.send(elementsTemplate)
})
app.use( (req, res)=>{
  res.send(notFoundTemplate)
})

app.listen(port, ()=>{
  console.log(`El servidor está funcionando en http://localhost:${port}`)
})
