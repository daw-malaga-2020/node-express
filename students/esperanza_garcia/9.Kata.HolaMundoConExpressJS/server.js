const express = require('express')

const app = express()
const port= process.env.PORT || 8080

app.get('/',(req, res)=>
{
res.end('Hola Mundo')
})

app.listen(port, ()=>{
  console.log(`Servidor activo en http://localhost:${port}`)
})
