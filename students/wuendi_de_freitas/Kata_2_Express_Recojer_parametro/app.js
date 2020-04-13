const express = require ('express')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Hola mundo')

})

app.get('/calcular-dni/:dni?', (req, res) => {

    if (!req.params.dni){
        res.send("Falta DNI");
    }

    if (req.params.dni){

      let nif = getDNILetter(req.params.dni)
        res.send('<html><head><title>HOLA MUNDO</title></head><body><h1>CALCULO DNI!!!</h1><p>DNI: ' + req.params.dni +' </p><p>NIF: '+ nif +' </p> </body></html>')
    }

})

app.listen(port, () =>{
    console.log(`Servidor activo en http://localhost: ${port}!`)
})


function getDNILetter(dni){
  let cadena = 'TRWAGMYFPDXBMJZSQVHLCKET'
  let posicion =  dni % 23
  letra = cadena.substring(posicion, posicion + 1)

  return dni + letra
}