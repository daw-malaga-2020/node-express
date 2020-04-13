const express = require ('express')

const app = express()
const port = process.env.PORT || 5051

app.get('/', (req, res) => {
    res.send('<html><head><title>PÁGINA PRINCIPAL</title></head><body><h1>PÁGINA PRINCIPAL!!!</h1></body></html>')

})
app.get('/index', (req, res) => {
     res.redirect('/')
    })

app.get('/blog', (req, res) => {
    res.send('<html><head><title>BLOG</title></head><body><h1>BLOG!!!</h1></body></html>')
   })

app.get('/articles', (req, res) => {
    res.redirect('/blog')
   })

app.get('/blog/:articleSlug', (req, res) => {
    res.send('<html><head><title>BLOG</title></head><body><h1>BLOG ARTICLE '+ req.params.articleSlug + '</h1></body></html>')
   })

app.get('/contact', (req, res) => {
    res.send('<html><head><title>BLOG</title></head><body><h1>SECCION CONTACT!</h1></body></html>')
   })

app.route('/usuarios')
    .get((req, res ) => {
       res.send('obtenemos la direccion del usuario')
    })
    .post((req, res ) => {
        res.send('creamos un nuevo usuario')
    })
    .delete((req, res ) => {
        res.send('eliminamos usuario')
     })


app.listen(port, () =>{
    console.log(`Servidor activo en http://localhost: ${port} `)
})

