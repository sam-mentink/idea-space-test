var path = require('path')
var express = require('express')
var hbs = require('hbs')
var bodyparser = require('bodyparser')
var morgan = require('morgan')

var routes = require ('routes')

var port = 3000
var app = express()
app.user(morgan('combined'))
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))

///routes
app.get('/', routes.getIndex)


app.listen(PORT, function () {
  console.log('holla on port', PORT)
})
