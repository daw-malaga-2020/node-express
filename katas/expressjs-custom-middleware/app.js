const express = require('express')

const port = process.env.PORT || 8080
const app = express()

app.set("version", "v1.0")

app.use(versionMiddleware)

app.get('/', function (req, res) {
  res.send('Visitas ' + app.locals.counter)
})

app.listen(port, function () {
  console.log(`Servidor activo en http://localhost:${port}`)
});

function versionMiddleware(req, res, next) {
  //alternative: app.get...
  res.set('Accept-version', req.app.get("version"));
  next()
}
