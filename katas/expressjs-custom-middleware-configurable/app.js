const express = require('express')
const config = require('./config')
const app = express()
const port = process.env.PORT || config.SERVER_PORT

app.use(versionMiddleware)

app.get('/', (req, res) => {
  res.send('Current API version:  ' + res.getHeader("Accept-version"))
})

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`)
})

function versionMiddleware(req, res, next) {
  res.set('Accept-version', config.API_VERSION)
  next()
}
