const express = require('express')
const fs = require('fs')
const events = require('events')
const eventHandler = new events.EventEmitter()

const app = express()
const serverPort = process.env.PORT || 8080
const oneMillion = 1000000

let visitCounter = 0

try {
  visitCounter = fs.readFileSync('stats/visits.txt', 'utf8')
} catch (e) {
  console.info('old visit file not found. Counting form 0')
}

const indexTemplate = fs.readFileSync('templates/index.html', 'utf8')
const genericTemplate = fs.readFileSync('templates/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('templates/elements.html', 'utf8')
const notFoundErrorTemplate = fs.readFileSync('templates/error-404.html', 'utf8')
const statsTemplate = fs.readFileSync('templates/stats.html', 'utf8')

eventHandler.on('increment_visit', (currentRoute) => {
  console.log('Emitted increment_visit event with route ' + currentRoute)
  visitCounter++

  if (visitCounter % oneMillion) {
    //we can emit events inside subscriber function
    eventHandler.emit('send_access_stat_email', visitCounter)
  }

  console.log(`${visitCounter} visits`)

  fs.writeFileSync('stats/visits.txt', visitCounter)

  let sectionFile = 'stats/' + currentRoute.replace('/', '') + '.txt'

  fs.writeFileSync(sectionFile, 0)

})

eventHandler.on('send_access_stat_email', (totalVisits) => {
  //sends mail to admin with the achievement
})

app.get('/', (req, res) => {
  res.redirect('/index')
})

app.get('/index', (req, res) => {
  eventHandler.emit('increment_visit', req.url)

  res.send(indexTemplate)
})

app.get('/elements', (req, res) => {
  eventHandler.emit('increment_visit', req.url)

  res.send(elementsTemplate)
})

app.get('/stats', (req, res) => {
  eventHandler.emit('increment_visit', req.url)

  let parseredStatsTemplate = statsTemplate.replace("{{totalVisits}}", visitCounter).replace("{{totalVisitsDouble}}", visitCounter * 2);
  res.send(parseredStatsTemplate)
})

app.get('/generic', (req, res) => {
  eventHandler.emit('increment_visit', req.url)

  res.send(genericTemplate)
})

app.use((req, res) => {
  res.status(404).send(notFoundErrorTemplate)
})

app.listen(serverPort, () => {
  console.log(`Servidor activo en http://localhost:${serverPort}`)
})
