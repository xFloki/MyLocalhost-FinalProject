const express = require('express');
const index = require('./routes/index');

const app = express();

require('./config/express')(app);
require('./config/passport')(app);

require('./routes')(app);

require('./config/error-handler')(app);

module.exports = app;
