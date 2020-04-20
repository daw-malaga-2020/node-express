const express = require('express')

const port = process.env.PORT || 8081
const app = express()


app.get('/', ( req, res) => {
    res.send('<html><head><tittle>PAGINA PRINCIPAL</tittle></head><body><h1>PAGINA PRINCIPAL</h1></body></html>')
})

app.get('/index', ( req, res) => {
    //res.redirect('/')
    res.send('<html><head><tittle>PAGINA PRINCIPAL</tittle></head><br><body><a href="/">IR A LA PAGINA PRINCIPAL!</a></body></html>')
})


app.get('/blog', ( req, res) => {
    res.send('<html><head><tittle>HOLA PA TI MI COLA</tittle></head><body><h1>SECCION BLOG LISTADO!</h1></body></html>')
})

app.get('/blog/:articleSlug', ( req, res) => {
    res.send('<html><head><tittle>HOLA PA TI MI COLA</tittle></head><body><h1>SECCION BLOG ARTICULO ' + req.params.articleSlug + '!!</h1></body></html>')
})

app.get('/articulos', ( req, res) => {
    res.redirect('/blog')
})


app.get('/contact', ( req, res) => {
    res.send('<html><head><tittle>HOLA PA TI MI COLA</tittle></head><body><h1>SECCION CONTACTO!</h1></body></html>')
})

app.route('/usuarios')
    .get((req, res) => {
        res.send('Obtenemos el perfil del usuario')
    })
    .post((req, res) => {
        res.send('Creamos un nuevo usuario')
    })
    .delete((req, res) => {
        res.send('Eliminamos un usuario')
    })

app.get('/calcular-dni/:dni?', ( req, res) => {

    if(!req.params.dni){
        res.send('Falta el DNI!');
    }
    if(req.params.dni){
        let nif = getDNILetter(req.params.dni)

        res.send('<html><head><tittle>HOLA PA TI MI COLA</tittle></head><body><h1>CALCULO DNI</h1><p>DNI: ' + req.params.dni +'</p><p>NIF: <b>' + nif +'</b></p></body></html>')
    }
})

function getDNILetter(dni){
    let cadena = 'TRWAGMYFPDXBNJZSQVHLCKET'
    let posicion = dni % 23
    letra = cadena.substring(posicion, posicion + 1)


    return dni + letra
}


app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})