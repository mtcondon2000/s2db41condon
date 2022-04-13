var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { default: mongoose } = require('mongoose');


//var mydataRouter = require('./routes/mydata');
var teslasRouter = require('./routes/teslas');
//var modRouter = require('./routes/addmods');
var selRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

const connectionString = process.env.MONGO_CON
//mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open",function() {
  console.log("Connection to DB succeeded")});

var Tesla = require("./models/teslaSchema");

async function recreateDB() {
  await Tesla.deleteMany();

let instance1 = new
Tesla({tesla_type:"Model 3", year:2015, cost:55000});
  instance1.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("First object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
//app.use('/mydata', mydataRouter);
app.use('/teslas', teslasRouter);
//app.use('/addmods', modRouter);
app.use('/selector', selRouter);
app.use('/resource', resourceRouter);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
