// подключение модулей
var express = require('express');
var stylus = require('stylus');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();       

function compile(str, path) {
  return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

// app.get('/partials/:partialPath', function(req, res) {
//   res.render('partials/' + req.params.partialPath);
// });

app.get('*', function(req, res) {
  //res.render('index');
  res.sendfile('./server/views/index.html');
});

var port = process.env.PORT || 8080;

// запуск сервера на порту 8080
app.listen(port, function(err) {
  if (err) throw err;
  console.log("Listening on port " + port + "..." );
});
