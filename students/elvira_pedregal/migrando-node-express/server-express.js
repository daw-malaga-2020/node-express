//importamos los modulos
const express = require('express')
const fs = require('fs') // modulo fs encargado de cargar las plantillas y devolverlas
const events = require('events') //modulo eventos
const eventHandler = new events.EventEmitter()

const port = process.env.PORT || 8080 //definimos el puerto
const app = express() //creamos la instancia app


let visitCounter = 0 //inicializamos las visitas

// intenta leer el fichero stats/visits sino imprime
try{
  visitCounter = fs.readFileSync('stats/visits.txt', 'utf8') // recuperar las visitas contadas que tenia (si el fichero existe, meto el recuento anterior)
} catch(e){
  console.info('old visit file not found, counting from 0')
}

//extraer/precargar el contenido de las plantillas, lo que devuelve es siempre una cadena de texto
const indexTemplate = fs.readFileSync('templates/index.html', 'utf8')
const genericTemplate = fs.readFileSync('templates/generic.html', 'utf8')
const elementsTemplate = fs.readFileSync('templates/elements.html', 'utf8')
const errorTemplate = fs.readFileSync('templates/error-404.html', 'utf8')
const statsTemplate = fs.readFileSync('templates/stats.html', 'utf8')


eventHandler.on('increment_visit', (currentRoute) => {
    console.log("hey!, ha saltado el evento increment_visit: "+ currentRoute)
    visitCounter++ //incremento de la visita

    if (visitCounter === 500000){
      //puedo tambien lanzar un evento dentro de otro
      event.emit('send_access_stat_email', visitCounter)
    }

    fs.writeFileSync('stats/visits.txt', visitCounter) //escribe en el fichero las visitas q tenga en memoria

    //let sectionFile = 'stats/'+ currentRoute.replace("/","") +'.txt' //declara las secciones
    let sectionFile =`stats/${currentRoute}.txt`

    fs.writeFileSync(sectionFile,0)

    console.info(`Tengo ${visitCounter} visitas`)
})

eventHandler.on('send_access_stat_email', () => {
    //enviar un email
})

app.get('/', (req , res) => {
  console.log(req.url)
  res.redirect('/index')
})

app.get('/index', (req , res) => {
  eventHandler.emit('increment_visit', req.url) //emitir el evento
  res.send(indexTemplate)
})

app.get('/elements', (req , res) => {
  eventHandler.emit('increment_visit', req.url)
  res.send(elementsTemplate)
})

app.get('/generic', (req  ,res) => {
  eventHandler.emit('increment_visit', req.url)
  res.send(genericTemplate)
})

app.get('/stats', (req , res) => {

  eventHandler.emit('increment_visit', req.url)
  eventHandler.emit('send_access_stat_email')

  let parseredStatsTemplate = statsTemplate.replace("{{totalVisits}}",visitCounter).replace("{{totalVisitsDouble}}",visitCounter*2);
  res.send(statsTemplate)
})

app.set('error-404', (req,res)=>{
  res.send(errorTemplate)
})

app.listen(port, () => {
  console.info(`Running http server on http://localhost:${port}`)
})
