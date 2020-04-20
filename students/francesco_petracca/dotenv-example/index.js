const envVars = require('./config')
const express = require('express')


const app = express()
const serverPort = proces.env.PORT || envVars.SERVER_PORT

app.set('api_version', envVars.API_VERSION)

app.get('/', (req, res) => {
    let apiVersion = req.app.get('api_version')
    res.send('La version de mi API es: '+apiVersion)
})

app.listen(serverPort, () => {
    console.info(`Server running in http://localhost:${serverPort}`)
})

