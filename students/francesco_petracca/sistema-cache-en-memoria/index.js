const express = require('express')

const memCacheMiddleware = require('./middlewares/memcachemiddlewares')
const env = require('./config')

const app = express()
const serverPort = process.env.PORT || env.SERVER_PORT



app.get('/', memCacheMiddleware(env.DEFAULT_CACHE_IN_SECONDS), (req, res) => {
    setTimeout(() => {
        res.send('PAGINA PRINCIPAL '+new Date())
    }, 5*1000)
})

app.get('/contact', memCacheMiddleware(env.DEFAULT_CACHE_IN_SECONDS), (req, res) => {
    setTimeout(() => {
        res.send('CONTACTO '+new Date())
    }, 5*1000)
})

app.get('/blog', memCacheMiddleware(env.BLOG_CACHE_IN_SECONDS), (req, res) => {
    setTimeout(() => {
        res.send('BLOG '+new Date())
    }, 5*1000)
})

app.get('/blog/:articleid', memCacheMiddleware(env.BLOG_CACHE_IN_SECONDS), (req, res) => {
    setTimeout(() => {
        res.send('ARTICULO BLOG '+new Date())
    }, 5*1000)
})


app.listen(serverPort, () => {
    console.info(`Running server on http://localhost:${serverPort}`)
})