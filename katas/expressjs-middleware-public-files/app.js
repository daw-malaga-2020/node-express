const express = require('express')
const port = process.env.PORT || 8080
const app = express()

let options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
};

app.use(express.static('public', options))
app.locals.counter = 0;
//app.use(customMiddleware)

app.get('/', customMiddleware, function (req, res) {
    res.send('Visitas ' + app.locals.counter)
})

app.get('/home', function (req, res) {
    res.send('Visitas ' + app.locals.counter)
})

app.listen(port, function () {
    console.log(`Servidor activo en http://localhost:${port}`)
});

function customMiddleware(req, res, next) {
    app.locals.counter++

    next()
}
