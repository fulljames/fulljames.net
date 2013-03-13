express = require 'express'
_public = __dirname + '/public'

controllers = require './controllers'

app = module.exports = express.createServer()

app.configure ->
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'jade'
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.compiler(
    src: _public
    enable: ['less']
  )
  app.use express['static'] _public

app.get '/', controllers.home.index
app.get '/articles', controllers.articles.index
app.get '/articles/:article', controllers.articles.page
app.get '/fiction', controllers.fiction.index
app.get '/fiction/:article', controllers.fiction.page

app.listen if process.argv.length > 2 then parseInt(process.argv[2]) else 3000
console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env