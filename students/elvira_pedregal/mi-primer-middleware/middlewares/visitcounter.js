function visitCounterMiddleware(req, res, next){
  console.info('my first middleware was executed!')
  req.app.locals.visit++
  console.info('Visits:'+ req.app.locals.visits)

  next()
}

module.exports = visitCounterMiddleware
