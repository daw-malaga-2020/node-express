const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 8080
let visitsCount = 0;


const indexTemplate = fs.readFileSync('./views/index.html', 'utf8')
const genericTemplate = fs.readFileSync('./views/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('./views/elements.html', 'utf8')
/* const errorTemplate = fs.readFileSync('./views/error-404.html', 'utf8') */

function visitsMiddleware(req, res, next){
  visitsCount++
  console.info(visitsCount)
  next()
}

function showNotFoundPage(req, res){
    res.send('Página no encontrada')
}

//app.use(visitsMiddleware)

app.get('/', visitsMiddleware, (req, res, next) => {
    res.send(indexTemplate)
})

app.get('/index', (req, res, next) => {
    //res.send('hola mundo desde la ruta index!')
    res.redirect('/')
})

app.get('/generic', visitsMiddleware, (req, res, next) => {
    res.send(genericTemplate)
})

app.get('/elements', visitsMiddleware, (req, res, next) => {
    res.send(elementsTemplate)
})

app.use(showNotFoundPage)

app.listen(port, () => {
    console.log(`servidor activo en http://localhost:${port}`)
})

