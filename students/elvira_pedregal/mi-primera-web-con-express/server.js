const express = require('express') //INCLUIR DEPENDENCIAS
const port = process.env.PORT || 8080
const app = express()//CREACION DE LA INSTANCIA  // app es instancia de la aplicacion de express
// no podemos acceder a app en otro fichero. dentro del objeto res tenemos la propiedad .app donde podemos acceder a las variables globales o a otros metodos disponibles.

//seteamos la variable global "app-name"

app.set('app-name','my test app');

//app.set recibe el nombre que le queramos poner a la variable global y el valor que (en este caso es una cadena de texto) puede ser un json, un numero, un booleano, lo que queramos.
//como usamos esa variable global dentro del codigo?


//esta variable se ejecuta cuando alguien hace una peticion sobre la ruta principal de mi sitio con un parametro nombre opcional.
//se ESCUCHAR las peticiones sobre las rutas y se realizan operaciones segun la ruta
//DEFINIR una RESPUESTA
//creacion de una ruta get
//los : significa que es una variable en la ruta y el ? es que es opcional.
app.get('/:nombre?/:dni?', (req , res) => {
  if(req.params.dni){
    let nif = getDNILetter(req.params.dni)
    res.send(`Hola ${req.params.nombre} esta app se llama ${app.get('app-name')} y tu dni es ${nif}`)
  }
  if(req.params.nombre){
    res.send(`Hola ${req.params.nombre} esta app se llama ${app.get('app-name')}`)
  } else {
    res.send(`Esta app se llama ${app.get('app-name')}`)
  }
})
//si quiero obtener el valor de la variable global 'app-name'  = app.get(nombre de la variable) como parametro.
  //en este caso envia como respuesta el nombre de la variable global que hemos definido como un cadena de texto con el nombro de la aplicacion 'my test app' cuando alguien llama a la ruta principal.


// ej: creacion de una ruta POST se ejecutará si se realiza una peticion de envio de un formulario
app.post('/', (req , res) => {
  res.send('POST enviado a la pagina principal')
})


//ARRANCO el servidor
app.listen(port,() => {
  console.log(`servidor activo en http://localhost:${port}!`)
})


function getDNILetter(dni){
  let cadena ="TRWAGMYFPDXBNJZSQVHLCKET"
  let posicion = dni % 23
  letra = cadena.substring(posicion,posicion + 1)
  return dni + letra
}
