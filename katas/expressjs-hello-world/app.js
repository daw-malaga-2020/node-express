const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('¡Hola mundo!')
});

app.get('/index', function (req, res) {
  res.redirect('/')
});

app.use((req, res) => {
  res.status(404).send('Ruta no encontrada!')
})

app.listen(port, function () {
  console.log(`Servidor activo en http://localhost:${port}`)
});
