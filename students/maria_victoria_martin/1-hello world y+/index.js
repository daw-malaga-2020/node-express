const express = require('express')
const port = process.env.PORT || 8080
const app = express() // instancio express para crear mi aplicación

app.get ('/', (req, res)=>{

  res.send('<html><head><title>Hola mundo!</title></head><body><h1>HOLA QUE ASE</h1></body></html>')
})
app.get ('/index', (req, res)=>{

  res.redirect('/')
})
app.get ('/blog/:articleSlug', (req, res)=>{

  res.send('<html><head><title>Hola mundo!</title></head><body><h1>blog' + req.params.articleSlug + '</h1></body></html>')
})

app.get ('/about', (req, res)=>{

  res.send('<html><head><title>Hola mundo!</title></head><body><h1>About</h1></body></html>')
})
app.get ('/works', (req, res)=>{

  res.send('<html><head><title>Hola mundo!</title></head><body><h1>Works</h1></body></html>')
})
app.get ('/work detail', (req, res)=>{

  res.send('<html><head><title>Hola mundo!</title></head><body><h1>Works detail</h1></body></html>')
})

app.route ('/usuarios')
  .get((req,res)=>{
    res.send('obtenemos el perfil del usuario')
  })
  .post((req,res)=>{
    res.send('creamos un nuevo usuario')
  })
  .delete((req,res)=>{
    res.send('eliminamos usuario')
  })

app.listen(port, ()=>{
  console.log(`Server corriendo en http://localhost:${port}`)
})