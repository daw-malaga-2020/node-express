const memcache = require('memory-cache')

module.exports =(cacheDurationSeconds)=>{
return (req, res, next) =>{

  console.log('..middleware caheado');
  //proceso de cacheado
  //comprobar si la petición se ha cacheado previamente
  //SI-> Devolvemos el contenido en la caché
  //NO -> Cacheamos el contenido

  let cacheKey = '__APP__' + req.originalURL || req.url
  let cacheResponse = memcache.get(cacheKey)

  if(cacheResponse){
    res.send(cacheResponse)
    return
  }
  res.sendResponse = res.send

  res.send= (body)=>{
    memcache.put(cacheKey, body, cacheDurationSeconds, 6*1000)
    res.sendResponse(body)
  }

  next()
}
}
