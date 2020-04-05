const url = require('url')

let demoURL = 'http://localhost:8080/test-route?param=info&page=1&limit=20#hash'

const newLocal = url.parse(demoURL)

console.log('The protocol: ' + newLocal.protocol)
console.log('The hostname: ' + newLocal.hostname)
console.log('The endpoint: ' + newLocal.path)
console.log('---------------------------')
console.log('The port: ' + newLocal.port)
console.log('The path: ' + newLocal.pathname)
console.log('The param: ' + newLocal.query)
console.log('The hash(#): ' + newLocal.hash)
