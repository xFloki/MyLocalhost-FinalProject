const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").load();
const House = require('../models/house.model');
const Task = require('../models/task.model');
const User = require('../models/user.model');

const bcryptSalt = 10;

const salt = bcrypt.genSaltSync(bcryptSalt);
const password = 'abcd';
const encryptedPass = bcrypt.hashSync(password, salt);
const db = 'mongodb://localhost/mylocalhost-project'

console.log(db)
mongoose.connect(db);

User.collection.drop();
Task.collection.drop();
House.collection.drop();

const users = [
  {
    username: '1',
    name: '1',
    password: encryptedPass,
    email: '1@1.1',
    photo: 'https://ultimahora.es/sfAttachPlugin/getCachedContent/id/210418'
  },
  {
    username: 'Anton',
    name: 'Antonio',
    password: encryptedPass,
    email: 'pepe@hotmail.com',
    role: 'user',
    photo: 'https://sports-images.vice.com/images/2016/09/28/edu-marn-el-escalador-que-toc-el-cielo-tras-hundirse-en-el-pozo-body-image-1475080020.jpg'
  },
  {
    username: 'Jaime',
    name: 'Jaime',
    password: encryptedPass,
    email: 'james@hotmail.com',
    role: 'user',
    photo: 'http://alpenglowcollective.co/wp-content/uploads/2016/05/oliviafeatured.jpg'
  },
  {
    username: 'xFloki',
    name: 'Alejandro',
    password: encryptedPass,
    email: 'floki@hotmail.com',
    role: 'user',
    photo: 'http://i.imgur.com/lhj7o4a.png'
  },
  {
    username: 'pepito',
    name: 'Pepe',
    password: encryptedPass,
    email: 'pepi@hotmail.com',
    role: 'user',
    photo: 'https://climbingaway.fr/photos_grimpeurs/298/smart/klemen_becanw.jpg'
  },
  {
    username: 'ramon86',
    name: 'Ramon',
    password: encryptedPass,
    email: 'ram@hotmail.com',
    role: 'user',
    photo: 'https://avatarfiles.alphacoders.com/104/104391.png'
  }
];

User.create(users, (err, docs) => {
      if (err) {
        throw err;
      }
      console.log('Users Added');
      mongoose.connection.close();
    });

 // mongoose.connection.close();
