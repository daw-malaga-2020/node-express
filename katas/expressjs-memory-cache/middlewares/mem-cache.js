const mcache = require('memory-cache')

let cacheMiddleware = (cacheDurationInSeconds) => {
  return (req, res, next) => {
    let itemKey = '__myapp__' + req.originalUrl || req.url
    let cachedResponse = mcache.get(itemKey)

    //early return
    if (cachedResponse) {
      res.send(cachedResponse)
      return
    }

    res.sendResponse = res.send

    res.send = (body) => {
      mcache.put(itemKey, body, cacheDurationInSeconds * 1000)
      res.sendResponse(body)
    }

    next()
  }
}

module.exports = cacheMiddleware
