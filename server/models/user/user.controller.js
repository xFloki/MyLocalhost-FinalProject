const passport = require("passport");
const User = require('./user.model');
const path = require('path');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const _ = require('lodash');

module.exports = {

 signup: (req, res, next) => {
   const { username, name, password, email, photo } = req.body;

   if (!username || !password || !name || !email )
   return res.status(400).json({ message: 'Provide all necessary fields' });

   //debug('Find user in DB');

   User.findOne({ username },'_id').exec().then(user =>{
     if(user)
       return res.status(400).json({ message: 'The username already exists' });
     debug('creatding user');
     const theUser = new User({
       username,
       name,
       password,
       email,
       photo
     });
     return theUser.save()
     .then(user =>{
       req.login(user, (err) => {
         if (err)
           return res.status(500).json({ message: 'Something went wrong' });

         res.status(200).json(req.user);
       });
     });
   })
   .catch(e => {
     console.log(e);
     res.status(400).json({ message: 'Something went wrong' });
   });
 },

 login: (req, res, next) => {
   passport.authenticate('local', (err, user, failureDetails) => {
     if (err)
       return res.status(500).json({ message: 'Something went wrong' });

     if (!user)
       return res.status(401).json(failureDetails);

     req.login(user, (err) => {
       if (err)
         return res.status(500).json({ message: 'Something went wrong' });

       // We are now logged in (notice req.user)
       res.status(200).json(req.user);
     });
   })(req, res, next);
 },

 stopBeingHomeless: (req, res, next) => {
   User.findByIdAndUpdate(req.user._id, { homeless:false }, { new: true })
    .then((result) =>  res.status(200).json(result));
 },

 logout: (req, res) => {
   req.logout();
   res.status(200).json({ message: 'Success' });
 },

 loggedIn: (req, res) => {
   console.log(req.user);
   if (req.isAuthenticated())
     return res.status(200).json(req.user);
   res.status(403).json({ message: 'Unauthorized' });
 }

};
