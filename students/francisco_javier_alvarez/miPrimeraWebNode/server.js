const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

http.createServer((req, res) => {
    let currentRoute = req.url;

    if (currentRoute === '/' || currentRoute === '/index') {
        res.writeHead('200', '{"content-Type": "text/html;charset=UTF-8"');
        res.write(templateIndex);
        res.end();
    }
    if (currentRoute === '/generic') {
        res.writeHead('200', '{"content-Type": "text/html;charset=UTF-8"');
        res.write(templateGeneric);
        res.end();
    }
    if (currentRoute === '/elements') {
        res.writeHead('200', '{"content-Type": "text/html;charset=UTF-8"');
        res.write(templateElements);
        res.end();
    }
}).listen(port)

console.log(`Servidor funcionando en http://localhost:${port}`)
let templateIndex = fs.readFileSync('views/index.html', 'utf8'),
    templateGeneric = fs.readFileSync('views/generic.html', 'utf8'),
    templateElements = fs.readFileSync('views/elements.html', 'utf8');