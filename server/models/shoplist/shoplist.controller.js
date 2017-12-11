const ShopList = require('./shoplist.model');

module.exports = {

 addShopList: (req, res, next) => {
   let id = req.user._id;
   const newShopList = new ShopList ({
      owner: id
    });

    newShopList.save()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => res.status(500).json(err));
 },

 getShopLists: (req, res, next) => {
   ShopList.find().populate('owner','username')
    .then( result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
 },

 getShopList: (req, res, next) => {
   ShopList.findById(req.params.id)
   .populate('owner','username')
   .populate({
    path: 'products',
    model: 'Portion',
    select: 'owner status products',
    populate: {
        path: 'owner',
        select: 'username',
        model: 'User'
      }
    })
    .then( result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
 }


};
