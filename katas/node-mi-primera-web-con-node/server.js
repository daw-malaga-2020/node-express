const http = require('http')
const fs = require('fs')
const events = require('events')
const eventHandler = new events.EventEmitter()

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
const errorTemplate = fs.readFileSync('templates/error-404.html', 'utf8')
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

function isValidRoute(route) {
  return (route === '/index' ||
    route === '/' ||
    route === '/generic' ||
    route === '/stats' ||
    route === '/elements')

}

function serverRequestHandler(req, res) {

  console.log(req.url)

  let currentRoute = req.url

  if (currentRoute === '/index' ||
    currentRoute === '/') {

    eventHandler.emit('increment_visit', currentRoute)

    res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
    res.write(indexTemplate)
    res.end()
  }

  if (currentRoute === '/elements') {

    eventHandler.emit('increment_visit', currentRoute)

    res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
    res.write(elementsTemplate)
    res.end()
  }

  if (currentRoute === '/stats') {

    eventHandler.emit('increment_visit', currentRoute)

    res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
    let parseredStatsTemplate = statsTemplate.replace("{{totalVisits}}", visitCounter).replace("{{totalVisitsDouble}}", visitCounter * 2);
    res.write(parseredStatsTemplate)
    res.end()
  }

  if (currentRoute === '/generic') {

    eventHandler.emit('increment_visit', currentRoute)

    res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
    res.write(genericTemplate)
    res.end()
  }

  //TODO: if dont match then 404 error

  if (!isValidRoute(currentRoute)) {

    res.writeHead(404, '{"Content-Type": "text/html;charset=UTF-8"}')
    res.write(errorTemplate)
    res.end()
  }

}

console.info(`Running http server on http://localhost:${serverPort}`)
http.createServer(serverRequestHandler)
  .listen(serverPort)
