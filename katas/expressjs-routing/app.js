const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('¡Hola mundo!')
})

app.get('/index', function (req, res) {
  res.redirect('/')
})

app.get("/contact", function (req, res) {
  res.send("Página de contacto")
})

app.get('/contact/:name', function (req, res) {
  let params = req.params

  res.send("Página de contacto para el departamento " + params.name)
})

app.use((req, res) => {
  res.status(404).send('Ruta no encontrada!')
})

app.listen(8080, function () {
  console.log(`Servidor activo en http://localhost:${port}`)
});
