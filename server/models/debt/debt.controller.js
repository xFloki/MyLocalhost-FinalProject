const path = require('path');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const Debt = require('./debt.model');

module.exports = {

 getUserDebts: (req, res, next) => {
   let id = req.user._id;
   Debt.find({ debtor: req.user }).populate('creditor','username')
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 }

};
