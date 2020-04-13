const express = require('express')

const memCacheMiddleware = require('./middleware/memcachemiddleware')
const env = require('./config')

const app = express()
const serverPort= process.env.PORT || env.SERVER_PORT

app.use(memCacheMiddleware)

app.get('/',(req,res)=>{
  setTimeout(()=>{
    res.send('Hola mundo'+new Date())
  },5*1000)

  })

app.listen(serverPort, ()=>{
  console.info(`El servidor está corriendo en http://localhost:${serverPort}`)
})
