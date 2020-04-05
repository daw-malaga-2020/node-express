const http = require('http')
const url = require('url')

const port = process.env.PORT || 8080

http.createServer(function (req, res) {

  let q = url.parse(req.url, true).query
  let name = q.name || 'anónimo'

  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' })
  res.write(`¡ Hola ${name}!`)
  res.end()

}).listen(port)
