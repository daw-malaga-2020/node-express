const express = require('express'),
    fs = require('fs'),
    app = express();

const port = process.env.PORT || 8080,
    templateIndex = fs.readFileSync('views/index.html', 'utf8'),
    templateGeneric = fs.readFileSync('views/generic.html', 'utf8'),
    templateElements = fs.readFileSync('views/elements.html', 'utf8');

let counterVisits = 0;

function visitsMiddleware(req, res, next) {
    counterVisits++;
    console.log(counterVisits)
    next();
}

app.use(visitsMiddleware)

app.get('/', (req, res) => {
    res.send(templateIndex);
});

app.get('/index', (req, res) => {
    res.redirect('/')
});

app.get('/generic', (req, res) => {
    res.send(templateGeneric);
});

app.get('/elements', (req, res) => {
    res.send(templateElements);
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
});