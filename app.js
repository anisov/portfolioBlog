var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./api/models/db');
config = require('./config/config.json');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
var index = require('./routes/index');
var indexApi = require('./api/routes/index');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build')));

app.use(session({
  secret: 'anisov',
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: null
  },
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use('/', index);
app.use('/api', indexApi);
const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    return next();
  }
  res.redirect('/');
};
app.use('/admin',isAdmin, function(req,res){
  res.sendFile(path.resolve(__dirname, './build', 'admin.html'))
});
app.use('/admin/admin-blog', function(req,res){
  res.sendFile(path.resolve(__dirname, './build', 'admin.html'))
});
app.use('/admin/admin-works', function(req,res){
  res.sendFile(path.resolve(__dirname, './build', 'admin.html'))
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
app.listen(config.http.port, config.http.host, () => {
  console.log(`Сервер запущен : ${config.http.host}:${config.http.port}!`);
});
module.exports = app;
