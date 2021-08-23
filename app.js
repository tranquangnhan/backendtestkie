var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors= require('cors'); //allow all origins
var indexRouter = require('./routes/index');
var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);



module.exports = app;
