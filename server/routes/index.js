const apiFor = require('../models/simplecrud.model');

module.exports = function(app) {

app.use('/api/auth', require("../models/user/index"));
app.use('/api/house', apiFor(require('../models/house/house.model')));
app.use('/api/user', apiFor(require('../models/user/user.model')));
app.use('/api/chore', apiFor(require('../models/task/task.model')));
app.use('/api/choreWeek', require('../models/weektask/index'));
app.use('/api/choreWeek', apiFor(require('../models/weektask/weektask.model')));
app.use('/api/house', apiFor(require('../models/house/house.model')));
app.use('/api/shoplist', apiFor(require('../models/shoplist/shoplist.model')));
app.use('/api/shoplist/portion', apiFor(require('../models/shoplist/portion/portion.model')));
app.use('/api/debt', require("../models/debt/index"));
app.use('/api/debt/debt', apiFor(require('../models/debt/debt.model')));
app.use('/api/scrape', require('../models/scrape/scrape'));

};
