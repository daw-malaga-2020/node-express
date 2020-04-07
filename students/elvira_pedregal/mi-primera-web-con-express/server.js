const express = require('express') //incluir  dependencia
const port = process.env.PORT || 8080
const app = express()//crea un servidor //Es instancia de la aplicacion de express

// no podemos acceder a app en otro fichero. dentro del objeto res tenemos la propiedad .app donde podemos acceder a las variables globales o a otros metodos disponibles.

//seteamos la variable global "app-name"

app.set('app-name','My test app'); 

//recibe el nombre que le queramos poner a la variable global y el valor que (en este caso es una cadena de texto) puede ser un json, un numero, un booleano, lo que queramos.
//como usamos esa variable global dentro del codigo?


//esta variable se ejecuta cuando alguien hace una peticion sobre la ruta principal:
//arranco el servidor 
//mandará una respuesta
app.get('/', (req , res) => {
    
  res.send(app.get('app-name')) //si quiero obtener el valor de la variable global 'app-name'  = app.get(nombre de la variable) como parametro.
  //en este caso envia como respuesta el nombre de la variable global que hemos definido como un cadena de texto con el nombro de la aplicacion 'my test app' cuando alguien llama a la ruta principal
})




//ej solicitar la pagina principal de mi sitio, siendo esta una single page.
app.post('/', (req , res) => {
  res.send('POST enviado a la pagina principal')
})


// ej, se ejecutará en el envio de un formulario
app.listen(port,() => {
  console.log(`servidor activo en http://localhost:${port}!`)
})