const server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Hola Mundo');
});
server.listen(8000);