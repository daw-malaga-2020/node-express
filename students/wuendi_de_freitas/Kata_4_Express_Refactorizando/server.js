const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 8080

const indexTemplate = fs.readFileSync('./views/index.html', 'utf8')
const genericTemplate = fs.readFileSync('./views/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('./views/elements.html', 'utf8')


app.get('/', (req, res) => {
    res.send(indexTemplate)
})
app.get('/index', (req, res) => {
    res.redirect('/')
})

app.get('/generic', (req, res) => {
    res.send(genericTemplate)
})

app.get('/elements', (req, res) => {
    res.send(elementsTemplate)
})


app.listen(port, () =>{
    console.log(`Servidor funcionando en http://localhost:${port}`) 
})


