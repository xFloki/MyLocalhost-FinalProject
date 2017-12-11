const Portion = require('./portion.model');
const ShopList = require('../shoplist.model');

module.exports = {

 getPortions: (req, res, next) => {
   Portion.find()
    .then( result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
 },
 getPortion: (req, res, next) => {
   Portion.findById(req.params.id)
    .then( result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
 },
 updatePortion: (req, res, next) => {
   prod = req.body.prod;
   Portion.findByIdAndUpdate(req.params.id,
      { $push: {products:prod } }, {new: true})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
 },
 createPortion: (req, res, next) => {
   console.log(req.body.shoplist);
   let id = req.user._id;
   const newPortion = new Portion ({
      owner: id,
      products: req.body.prod
    });
    newPortion.save()
      .then(result => {
        console.log(result._id);
        ShopList.findByIdAndUpdate(req.body.shoplist,
           { $push: { products: result._id } }, { new: true } )
         .then((result) => {
           res.status(200).json(result);
         });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
 }

};
