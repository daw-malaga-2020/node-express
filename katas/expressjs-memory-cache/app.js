const express = require('express')
const memCacheMiddleware = require('./middlewares/mem-cache.js')
const config = require('./config')
const app = express()

app.get('/', memCacheMiddleware(config.MEMCACHE_DURATION), (req, res) => {
    const delayInMiliseconds = 2.5 * 1000

    //simulate slow processing response
    setTimeout(() => {
        res.send('¡Hola mundo!')
    }, delayInMiliseconds)
});

app.use((req, res) => {
  res.status(404).send('Ruta no encontrada!')
})

app.listen(config.SERVER_PORT, function () {
    console.log(`Servidor activo en http://localhost:${config.SERVER_PORT}`)
});
