const events = require('events')

let Emitter = events.EventEmitter
let e = new Emitter()

//añadimos la función que escuchará al evento datos
e.on('datos', function(currentDateTime){
  console.log(currentDateTime.getHours()+":"+currentDateTime.getMinutes()+":"+currentDateTime.getSeconds())
})

setInterval(function(){
  e.emit('datos', new Date())
}, 1000) //intervalo cada segundo