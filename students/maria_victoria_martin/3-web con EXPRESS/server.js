const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 8080
let visitsCounts = 0;

const indexTemplate = fs.readFileSync('./views/index.html', 'utf8')
const genericTemplate = fs.readFileSync('./views/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('./views/elements.html', 'utf8')

function visitsMiddleware(req, res, next){
  visitsCounts++
  console.info(visitsCounts)
  next()
}

app.get('/', visitsMiddleware, (req,res)=>{
  res.send(indexTemplate)
})

app.get('/index', (req, res)=>{
  res.redirect('/')
})
app.get('/generic', visitsMiddleware, (req,res)=>{
  res.send(genericTemplate)
})
app.get('/elements', visitsMiddleware, (req,res)=>{
  res.send(elementsTemplate)
})

app.use(visitsMiddleware)

app.listen(port, ()=>{
  console.log (`Este web está funcionando en http://localhost:${port}`)
})