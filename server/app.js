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

const app = express();

require('./config/express')(app);
require('./config/passport')(app);

app.use('/api', index);
app.use('/api/house', apiFor(require('./models/house/house.model')));
app.use('/api/user', apiFor(require('./models/user/user.model')));
app.use('/api/chore', apiFor(require('./models/task/task.model')));
app.use('/api/house', apiFor(require('./models/house/house.model')));
app.use('/api/shoplist', apiFor(require('./models/shoplist/shoplist.model')));
app.use('/api/shoplist/portion', apiFor(require('./models/shoplist/portion/portion.model')));

require('./config/error-handler')(app);

module.exports = app;
