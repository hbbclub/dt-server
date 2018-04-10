var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
// var session=require('express-session');
// var flash=require('connect-flash');
var passport = require('passport');

require("./config/mongoose");
require("./config/passport")();

var index = require('./routes/index');
var users = require('./routes/users');
var question = require('./routes/question');
var report = require('./routes/report');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(session({
//     saveUninitialized:true,
//     resave:false,
//     secret:"123"
// }));
app.use(passport.initialize());
// app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/question', question);
app.use('/report', report);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ok: 1, msg: err.message});
});


module.exports = app;
