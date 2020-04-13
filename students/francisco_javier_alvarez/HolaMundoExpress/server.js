const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.end('Hola mundo')
})

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`)
})