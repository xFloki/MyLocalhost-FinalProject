const apiFor = require('../models/simplecrud.model');

module.exports = function(app) {

app.use('/api/auth', require("../models/user/index"));
app.use('/api/user', apiFor(require('../models/user/user.model')));
app.use('/api/chore', require('../models/task/index'));
app.use('/api/chore', apiFor(require('../models/task/task.model')));
app.use('/api/choreWeek', require('../models/weektask/index'));
app.use('/api/choreWeek', apiFor(require('../models/weektask/weektask.model')));
app.use('/api/house/invitation', require('../models/house/house-invitation/index'));
app.use('/api/house', require('../models/house/index'));
app.use('/api/shoplist/portion', require('../models/shoplist/portion/index'));
app.use('/api/shoplist', require('../models/shoplist'));
app.use('/api/debt', require("../models/debt/index"));
app.use('/api/debt/debt', apiFor(require('../models/debt/debt.model')));
app.use('/api/scrape', require('../models/scrape/scrape'));

};
