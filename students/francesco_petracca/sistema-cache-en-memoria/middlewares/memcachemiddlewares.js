const memcache = require('memory-cache')

module.exports = (cacheDurationinSeconds) => {

    cacheDurationinSeconds = cacheDurationinSeconds || 60*60*24

    return (req, res, next) => {
        
    console.log("-- middleware cacheados ("+cacheDurationinSeconds+") --");
    

    let cacheKey = '__APP__'+ req.orifiginalURL || req.url
    let cachedResponse = memcache.get(cacheKey)

    if(cachedResponse){
            res.send(cachedResponse)
            return
        }

        res.sendResponse = res.send

        res.send = (body) => {
            memcache.put(cacheKey, body, cacheDurationinSeconds*1000)
            res.sendResponse(body)
        }
    }

    next()
} 