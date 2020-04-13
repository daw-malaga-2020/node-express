const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const port = process.env.PORT || 8080

nunjucks.configure('./views',
{
    autoescape: true,
    express: app
})

app.use('/', (req, res)=>{

    let templateVars = {
      message: 'Hola mundo',
      user: 'nombre de usuario '
    }

  res.render('main.html', templateVars, (err, html)=>{
    if(err){
    console.info(html)
    }
    res.send(html)
  })
})

app.listen(port, ()=>{
  console.info(`El servidor está corriendo en http://localhost:${port}`)
})

