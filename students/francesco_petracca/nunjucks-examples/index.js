const express = require('express')
const nunjucks = require('nunjucks')

const port = process.env.PORT || 8080
const app = express()

nunjucks.configure('views',
{
    autoescape: true,
    express: app
})

app.use('/', (req, res) => {
    res.render('pagina-principal.html')
})

app.listen(port,() => {
    console.info(`Server running in http://localhost${port}`)
})