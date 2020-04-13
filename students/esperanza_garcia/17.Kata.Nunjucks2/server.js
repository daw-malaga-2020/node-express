const express= require('express')
const nunjucks = require('nunjucks')

const port= process.env.PORT || 8080
const app = express()

nunjucks.configure('./views', {
  autoescape: true,
  express: app
})

app.get('/', (req,res)=>{
  res.render('index.html')
} )

app.listen(port, ()=>
console.info(`Servidor activo en http://localhost:${port}`))
