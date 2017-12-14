require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const corsConfig = require('./cors.config');


module.exports = function(app) {


console.log('8=======D');
console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL,{useMongoClient:true}).then(() =>{
  console.log("Connected to db");
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'ironfundingdev',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}));


app.use(function(req, res, next) {
    res.locals.user = req.user;
    res.locals.title = 'IRON CLIMB';
    res.locals.action = req.path;
    next();
  });

};
