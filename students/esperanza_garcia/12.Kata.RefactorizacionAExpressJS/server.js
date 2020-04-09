const express = require('express')
const app = express()
const fs = require('fs')

const port= process.env.PORT || 8080

const indexTemplate = fs.readFileSync('./index.html', 'utf8')
const genericTemplate = fs.readFileSync('./generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('./elements.html', 'utf8')

app.get('/',(req, res)=>{
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
  res.send(`La web introducida no es correcta`)
})

app.listen(port, ()=>{
  console.log(`El servidor está funcionando en http://localhost:${port}`)
})
