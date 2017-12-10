const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").load();
const House = require('../models/house/house.model');
const Task = require('../models/task/task.model');
const User = require('../models/user/user.model');
const ShopList = require('../models/shoplist/shoplist.model');
const ShopPortion = require('../models/shoplist/portion/portion.model');
const Debt = require('../models/debt/debt.model');

const bcryptSalt = 10;

// const salt = bcrypt.genSaltSync(bcryptSalt);
// const password = '1';
const encryptedPass = '1';
const db = 'mongodb://localhost/mylocalhost-project';

console.log(db);
mongoose.connect(db, () =>{
  mongoose.connection.db.dropDatabase();
});


//User.collection.drop();
// Task.collection.drop();
// House.collection.drop();


const users = [
  {
    _id : '5a268f2ba0f20bd4971baaaa',
    username: '1',
    name: '1',
    password: encryptedPass,
    email: '1@1.1',
    photo: 'https://ultimahora.es/sfAttachPlugin/getCachedContent/id/210418'
  },
  {
    _id : '5a268f2ba0f20bd4971baaaf',
    username: 'Anton',
    name: 'Antonio',
    password: encryptedPass,
    email: 'pepe@hotmail.com',
    role: 'user',
    photo: 'https://sports-images.vice.com/images/2016/09/28/edu-marn-el-escalador-que-toc-el-cielo-tras-hundirse-en-el-pozo-body-image-1475080020.jpg'
  },
  {
    _id : '5a268f2ba0f20bd4971baaae',
    username: 'Jaime',
    name: 'Jaime',
    password: encryptedPass,
    email: 'james@hotmail.com',
    role: 'user',
    photo: 'http://alpenglowcollective.co/wp-content/uploads/2016/05/oliviafeatured.jpg'
  },
  {
    _id : '5a268f2ba0f20bd4971baaad',
    username: 'xFloki',
    name: 'Alejandro',
    password: encryptedPass,
    email: 'floki@hotmail.com',
    role: 'user',
    photo: 'http://i.imgur.com/lhj7o4a.png'
  },
  {
    _id : '5a268f2ba0f20bd4971baaac',
    username: 'pepito',
    name: 'Pepe',
    password: encryptedPass,
    email: 'pepi@hotmail.com',
    role: 'user',
    photo: 'https://climbingaway.fr/photos_grimpeurs/298/smart/klemen_becanw.jpg'
  },
  {
    _id : '5a268f2ba0f20bd4971baaab',
    username: 'ramon86',
    name: 'Ramon',
    password: encryptedPass,
    email: 'ram@hotmail.com',
    role: 'user',
    photo: 'https://avatarfiles.alphacoders.com/104/104391.png'
  }
];

const chores = [
  {
    name: 'Mopping floors',
    description: 'Mopping floors',
    estimatedTime: 15
  },
  {
    name: 'Watering plants',
    description: 'Watering plants',
    estimatedTime: 15
  },
  {
    name: 'Mowing the lawn',
    description: 'Mowing the lawn',
    estimatedTime: 15
  },
  {
    name: 'Weeding the garden',
    description: 'Weeding the garden',
    estimatedTime: 15
  },
  {
    name: 'Taking out the trash',
    description: 'Taking out the trash',
    estimatedTime: 15
  },
  {
    name: 'Wash the car',
    description: 'Wash the car',
    estimatedTime: 15
  },
  {
    name: 'Clean garage',
    description: 'Clean garage',
    estimatedTime: 15
  },
  {
    name: 'Vacuum curtains',
    description: 'Vacuum curtains',
    estimatedTime: 15
  }
];

const homes = [
  {
    owner: '5a268f2ba0f20bd4971baaaa',
    members: [
      '5a268f2ba0f20bd4971baaaa',
      '5a268f2ba0f20bd4971baaad',
      '5a268f2ba0f20bd4971baaae'
    ],
    street: 'Pasea de la Chopera 14',
    location: 'Madrid',
    country: 'Spain',
  },
  {
    owner: '5a268f2ba0f20bd4971baaaf',
    members: [
      '5a268f2ba0f20bd4971baaaf',
      '5a268f2ba0f20bd4971baaab'
    ],
    street: 'Pasea de la Chopera 10',
    location: 'Madriz',
    country: 'Hispania'
  }

];



createUsers = User.create(users);
createChores = Task.create(chores);
createHomes = House.create(homes);

Promise.all([createUsers,createChores,createHomes])
  .then(e => {
    console.log('Seeds added to the database');
    mongoose.connection.close();
  })
  .catch(e => console.log(e));
