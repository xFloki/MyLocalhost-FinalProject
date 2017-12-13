const path = require('path');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const Debt = require('./debt.model');

module.exports = {

 getUserDebts: (req, res, next) => {
   Debt.find({ debtor: req.user })
    .populate('creditor','username')
    .populate('debtor','username')
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 },

 getUserCreditorDebts: (req, res, next) => {
   Debt.find({ creditor: req.user })
    .populate('creditor','username')
    .populate('debtor','username')
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 },

 confirmPayment: (req, res, next) => {
   Debt.findByIdAndUpdate(req.params.id, { status: false })
    .then(e =>  {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 },

 createDebt: (req, res, next) => {
   console.log(req.user._id);
   let id = req.user.id;
   const newDebt = new Debt ({
      debtor: req.body.debt.debtor,
      creditor: id,
      quantity: req.body.debt.quantity,
      reason: req.body.debt.reason
    });
    newDebt.save()
      .then(result => { res.status(200).json(result); });
 }

};
