const House = require('./house.model');

module.exports = {

 getHouses: (req, res, next) => {
   House.find()
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 },

 getHouse: (req, res, next) => {
   House.find( { _id: req.params.id } )
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 },

 getHouseUser: (req, res, next) => {
   House.find( { members: req.params.id } )
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 },

 getCurrentUserHouse: (req, res, next) => {
   House.findOne( { members: req.user.id } )
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 },

 createHouse: (req, res, next) => {
   console.log('PENE');
   let id = req.user._id;
   const newHouse = new House ({
      owner: id,
      members: [ id ],
      country: req.body.house.country,
      location: req.body.house.location,
      street: req.body.house.street
    });

    newHouse.save()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => res.status(500).json(err));
 },

 addHouseMember: (req, res, next) => {
   House.findByIdAndUpdate(req.params.houseId,
     { $push: {members:req.user.id } }, {new: true})
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 }

};
