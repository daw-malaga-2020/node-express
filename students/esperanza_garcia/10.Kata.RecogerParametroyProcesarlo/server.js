const express = require('express')
const app = express()
const port = process.env.PORT || 8080

function getDNILetter(dni) {
  let cadena = 'TRWAGMYFPDXBNJZSQVHLCKET'
  let posicion = dni % 23
  letra = cadena.substring(posicion, posicion + 1)

  return dni + letra
}

app.get('/calcular-dni/:dni',function (req,res) {
  if(isNaN(req.params.dni)){
    res.send('El dni '+ req.params.dni +'no es un dni válido')
  }
  res.send('Mi dni con letra es: '+ getDNILetter(req.params.dni))
})

app.listen(port, ()=>{
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
