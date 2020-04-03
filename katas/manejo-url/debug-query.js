const url = require('url')

let demoURL = "http://localhost:8080/test-route?param=info&page=1&limit=20#hash"

console.log("The protocol: " + url.parse(demoURL).protocol)
console.log("The hostname: " + url.parse(demoURL).hostname)
console.log("The endpoint: " + url.parse(demoURL).path)
console.log("---------------------------")
console.log("The port: " + url.parse(demoURL).port)
console.log("The path: " + url.parse(demoURL).pathname)
console.log("The param: " + url.parse(demoURL).query)
console.log("The hash(#): " + url.parse(demoURL).hash)