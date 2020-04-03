const http = require('http')
const fs = require('fs')
const events = require('events')
const eventHandler = new events.EventEmitter()

const serverPort = 8080
let visitCounter = 0
try{
    visitCounter = fs.readFileSync('stats/visits.txt', 'utf8')
}catch(e){

}

const indexTemplate = fs.readFileSync('templates/index.tpl', 'utf8')
const genericTemplate = fs.readFileSync('templates/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('templates/elements.html', 'utf8')
const errorTemplate = fs.readFileSync('templates/error-404.html', 'utf8')
const statsTemplate = fs.readFileSync('templates/stats.html', 'utf8')

eventHandler.on('increment_visit', (currentRoute) => {
    console.log("hey!, ha saltado el evento increment_visit: "+currentRoute)
    visitCounter++
    console.log(`Tengo ${visitCounter} visitas`)

    fs.writeFileSync('stats/visits.txt', visitCounter)

    let sectionFile = 'stats/'+currentRoute.replace("/","")+'.txt'

    fs.writeFileSync(sectionFile,0)

})

eventHandler.on('send_access_stat_email', () => {
    //enviar un email

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
        eventHandler.emit('send_access_stat_email')

        res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
        let parseredStatsTemplate = statsTemplate.replace("{{totalVisits}}",visitCounter).replace("{{totalVisitsDouble}}",visitCounter*2);
        res.write(parseredStatsTemplate)
        res.end()
    }

    if (currentRoute === '/generic') {

        eventHandler.emit('increment_visit', currentRoute)

        res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}')
        res.write(genericTemplate)
        res.end()
    }

    //TODO: si no hay coincidencia de rutas, error 404

    if (!isValidRoute(currentRoute)) {
        res.writeHead(404, '{"Content-Type": "text/html;charset=UTF-8"}')
        res.write(errorTemplate)
        res.end()
    }

}

http.createServer(serverRequestHandler).listen(serverPort)
