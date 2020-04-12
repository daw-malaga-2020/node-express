const envVars = require('./config')
const express = require('express')

const app = express()
const serverPort = process.env.PORT ||  envVars.SERVER_PORT

app.set('api_version', envVars.API_VERSION)

app.get('/', (req, res) => {
    let apiVersion = req.app.get('api_version')
    res.send('La verison de mi API es : '+apiVersion)
})




app.listen(serverPort, () =>{
    console.info(`Server runnig in http://localhost: ${serverPort}`)
})