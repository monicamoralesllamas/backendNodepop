var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('./lib/connectMongoose');

//temporal 
//require('./routes/apiv1/anuncios');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/**
*Rutas de mi API
*/

app.use('/apiv1/anuncios', require('./routes/apiv1/anuncios'));



/**
*Rutas de mi Website
*/


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  //comprobar si es un error de validación REVISAR DEL ORIGINAL
 
  res.status(err.status || 500);
  
  //si es petición al API, responder con formato JSON
  if (req.originalUrl.startsWith('/apiv1/')){
    res.json({error :err.message});
    return;
  }


  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});

module.exports = app;
