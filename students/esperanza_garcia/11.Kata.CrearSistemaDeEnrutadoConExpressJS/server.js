const express = require('express')
const fs= require('fs')

const app = express()
const port = process.env.PORT||8080

const homeTemplate = fs.readFileSync("./home.html", "utf8")
const aboutTemplate = fs.readFileSync("./about.html", "utf8")
const workDetailTemplate = fs.readFileSync("./work-detail.html", "utf8")
const worksTemplate = fs.readFileSync("./works.html", "utf8")

app.get('/', function(req,res){
  res.send(homeTemplate)
})

app.get('/home', function(req,res){
  res.redirect('/')
})
app.get('/about', function(req,res){
  res.send(aboutTemplate)
})
app.get('/contacts', function(req,res){
  res.send(worksTemplate)
})
app.get('/contacts/:contact-name', function(req,res){
  res.send(workDetailTemplate)
})
app.get( (req, res)=>{
  res.send(`We're sorry don't found this page`)
})

app.listen(port, (req, res)=>{
  console.log(`El servidor está funcionando en http://localhost:${port}`)
})
