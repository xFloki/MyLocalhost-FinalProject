const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');
const apiFor = require('./models/simplecrud.model');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const db = 'mongodb://localhost/mylocalhost-project'

const app = express();

mongoose.connect(db,{useMongoClient:true}).then(() =>{
  console.log("Connected to db: " + db);
})


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'ironfundingdev',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))

require('./config/passport')(app);

app.use('/api', index);
// app.use('/api/house', apiFor(require('./models/house/house.model')));
app.use('/api/user', apiFor(require('./models/user/user.model')));
// app.use('/api/chore', apiFor(require('./models/task/task.model')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.status(500).json({ message: 'Error' });
});

module.exports = app;
