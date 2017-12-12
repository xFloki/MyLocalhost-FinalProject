const HouseInvitation = require('./house-invitation.model');

module.exports = {

 getInvitations: (req, res, next) => {
   HouseInvitation.find()
   .then(e => {
      res.status(200).json(e);
    })
    .catch(err => { console.log(err);res.status(500).json(err);} );
 },

 currentInvitations: (req, res, next) => {
   HouseInvitation.find({ destination: req.user.id })
   .populate({
    path: 'house',
    model: 'House',
    select: 'owner street',
    populate: {
        path: 'owner',
        select: 'username',
        model: 'User'
      }
    })
   .then(e => {
      res.status(200).json(e);
    })
    .catch(err => { console.log(err);res.status(500).json(err);} );
 },

 deleteInvitation: (req, res, next) => {
   HouseInvitation.findByIdAndRemove(req.params.id)
   .then(e => {
      res.status(200).json(e);
    })
    .catch(err => { console.log(err);res.status(500).json(err);} );
 },

 deleteUserInvitations: (req, res, next) => {
   HouseInvitation.remove( { destination: req.user.id } )
   .then(e => {
      res.status(200).json(e);
    })
    .catch(err => { console.log(err);res.status(500).json(err);} );
 }

};
