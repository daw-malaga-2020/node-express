const express = require('express')
const visitCounterMiddleware = require('./middlewares/visitcounter')

const port = process.env.PORT || 8080
const app = express()
app.locals.visits = 0

app.get('/', visitCounterMiddleware, (req, res) => {
  console.info(req.url)
  res.send('Número de visitas:' + app.locals.visits )
})

app.use((req, res) => {
  console.warn('Error 404!')
})

app.listen(port , () => {
  console.info(`server running in http://localhost${port}`)
})
