const express = require('express'),
    nunjucks = require('nunjucks');

const port = process.env.PORT || 8080,
    app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use('/', (req, res) => {

    let templateVars = {
        message: 'Hola mundo'
    }

    res.render('pagina-principal.html', templateVars, (err, html) => {
        if (err) {
            console.info(err)
        }
        res.send(html)
    })
})

app.listen(port, () => {
    console.info(`Server running in http://localhost:${port}`)
})