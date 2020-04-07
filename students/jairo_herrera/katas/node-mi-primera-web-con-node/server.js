//importamos todos los modulos que vamos a necesitar

const http = require('http') //paraa montar el servidor
const fs = require('fs') // cargar las plantillas y devolverlas al usuario en funcion a la ruta q se indique
const events = require('events')
const eventHandler = new events.EventEmitter()

const serverPort = 8080 // puerto del servidor
let visitCounter = 0 //inicializamos las visitas


try{
    visitCounter = fs.readFileSync('stats/visits.txt', 'utf8') // recuperar las visitas contadas que tenia (si el fichero existe, meto el recuento anterior)
}catch(e){

}

//extraer/precargar el contenido de las plantillas, lo que devuelve es siempre una cadena de texto
const indexTemplate = fs.readFileSync('templates/index.html', 'utf8')
const genericTemplate = fs.readFileSync('templates/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('templates/elements.html', 'utf8')
const errorTemplate = fs.readFileSync('templates/error-404.html', 'utf8')
const statsTemplate = fs.readFileSync('templates/stats.html', 'utf8')

//un subscriber (evento) funcion que esta eschuchando cada vez que se ejecuta el evento incremet visits
//en funcion a la ruta actual, se escriben las visitas que tenga en memoria
eventHandler.on('increment_visit', (currentRoute) => {
    console.log("hey!, ha saltado el evento increment_visit: "+currentRoute)
    visitCounter++ //incremento de la visita
    console.log(`Tengo ${visitCounter} visitas`)

    fs.writeFileSync('stats/visits.txt', visitCounter) //escribe en el fichero las visitas q tenga en memoria

    let sectionFile = 'stats/'+currentRoute.replace("/","")+'.txt' //escribir las visitas por seccion

    fs.writeFileSync(sectionFile,0)

})

//eventHandler.on('send_access_stat_email', () => {
    //enviar un email

//})


//metodo de utilidad para ver si las rutas son validas o no
function isValidRoute(route) {
    return (route === '/index' ||
        route === '/' ||
        route === '/generic' ||
        route === '/stats' ||
        route === '/elements')

}

//VIENE LO IMPORTANTE//


//esta funcion callback se ejecuta cada vez que alguien hace una peticion a mi servidor

function serverRequestHandler(req, res) {

    console.log(req.url)

    let currentRoute = req.url //obtener la ruta actual. dentro del objeto request (que recibe esta funcion call back de la funcion creadora del servidor) tengo la propiedad url, donde obtendo una cadena de texto con la ruta



    //diferentes acciones segun la ruta que reciba
    if (currentRoute === '/index' ||
        currentRoute === '/') {

        eventHandler.emit('increment_visit', currentRoute) //emitir el evento

        res.writeHead(200, '{"Content-Type": "text/html;charset=UTF-8"}') // la respuesta es correcta y lo que devuelve al navegador es un contenido de texto html y en utf-8 y este lo procesa como una pagina web y muestra las etiquetas procesadas. INFORMACION PARA EL NAVEGADOR
        res.write(indexTemplate) //mediante el metodo write envio el cuerpo de la respuesta, el contenido como tal. Le paso el contenido de la pagina principal que es lo que va a recibir.
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
        res.end() //cortar la ejecucion de la respuesta. pierdo el control
    }

    //TODO: si no hay coincidencia de rutas, error 404

    if (!isValidRoute(currentRoute)) {
        res.writeHead(404, '{"Content-Type": "text/html;charset=UTF-8"}') //404 --> codigos de estado // cuando el recurso no ha sido encontrado
        res.write(errorTemplate)
        res.end()
    }

}

http.createServer(serverRequestHandler).listen(serverPort) //CREACION DEL SERVIDOR y el callback con la funcion de manejo/callback
