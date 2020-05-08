const envVars = require('./config'),
    express = require('express');


const app = express()
const serverPort = process.env.PORT || envVars.SERVER_PORT

app.set('api_version', envVars.API_VERSION)

app.get('/', (req, res) => {
    let apiVersion = req.app.get('api_version')
    res.send('La versión de mi API es: ' + apiVersion)
})



app.listen(serverPort, () => {
    console.info(`Server running in http://localhost:${serverPort}`)
})