// подключение модулей
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require("morgan");

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();       

// настроим движок представления
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// подключим логгер
app.use(morgan('dev'));

// подключим body-parser для обработки тела запроса
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('X-HTTP-Method-Override'));

// установим папку public как статическую
app.use(express.static(__dirname + '/public'));

require('./server/routes/index')(app);
require('./server/routes/api')(app);

// порт приложения
var port = process.env.PORT || 8080;

// запуск сервера на порту 8080
app.listen(port, function(err) {
  if (err) throw err;
  console.log("Listening on port " + port + "..." );
});

exports = module.exports = app;   
