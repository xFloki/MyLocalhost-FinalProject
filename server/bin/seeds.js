const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").load();
const House = require('../models/house/house.model');
const Task = require('../models/task/task.model');
const User = require('../models/user/user.model');
const ShopList = require('../models/shoplist/shoplist.model');
const ShopPortion = require('../models/shoplist/portion/portion.model');
const Debt = require('../models/debt/debt.model');
const HouseInvitation = require('../models/house/house-invitation/house-invitation.model');
require('dotenv').config();

const encryptedPass = '1';
const db = process.env.MONGO_URL;

console.log(db);
mongoose.connect(db, () =>{
  mongoose.connection.db.dropDatabase();
});

const users = [
  {
    _id : '5a268f2ba0f20bd4971baaaa',
    username: '1',
    name: '1',
    password: encryptedPass,
    email: '1@1.1',
    homeless: false,
    photoUrl: 'https://ultimahora.es/sfAttachPlugin/getCachedContent/id/210418'
  },
  {
    _id : '5a268f2ba0f20bd4971baaaf',
    username: 'Anton',
    name: 'Antonio',
    password: encryptedPass,
    email: 'pepe@hotmail.com',
    role: 'user',
    homeless: false,
    photoUrl: 'https://sports-images.vice.com/images/2016/09/28/edu-marn-el-escalador-que-toc-el-cielo-tras-hundirse-en-el-pozo-body-image-1475080020.jpg'
  },
  {
    _id : '5a268f2ba0f20bd4971baaae',
    username: 'Jaime',
    name: 'Jaime',
    password: encryptedPass,
    email: 'james@hotmail.com',
    role: 'user',
    homeless: false,
    photoUrl: 'http://alpenglowcollective.co/wp-content/uploads/2016/05/oliviafeatured.jpg'
  },
  {
    _id : '5a268f2ba0f20bd4971baaad',
    username: 'xFloki',
    name: 'Alejandro',
    password: encryptedPass,
    email: 'floki@hotmail.com',
    role: 'user',
    homeless: false,
    photoUrl: 'http://i.imgur.com/lhj7o4a.png'
  },
  {
    _id : '5a268f2ba0f20bd4971baaac',
    username: 'pepito',
    name: 'Pepe',
    password: encryptedPass,
    email: 'pepi@hotmail.com',
    role: 'user',
    photoUrl: 'https://climbingaway.fr/photos_grimpeurs/298/smart/klemen_becanw.jpg'
  },
  {
    _id : '5a268f2ba0f20bd4971baaab',
    username: 'ramon86',
    name: 'Ramon',
    password: encryptedPass,
    email: 'ram@hotmail.com',
    role: 'user',
    homeless: false,
    photoUrl: 'https://avatarfiles.alphacoders.com/104/104391.png'
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
    _id: "5a3000b10db40758c0501d9b",
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
    _id: "5a3041c8b31eae5d2489b95e",
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


const debts = [
  {
    debtor: '5a268f2ba0f20bd4971baaad',
    creditor: '5a268f2ba0f20bd4971baaaa',
    quantity: 50,
    reason: 'Skins del Lol',
    status:  true
  },
  {
    debtor: '5a268f2ba0f20bd4971baaad',
    creditor: '5a268f2ba0f20bd4971baaaa',
    quantity: 20,
    reason: 'Gasolina',
    status:  true
  },
  {
    debtor: '5a268f2ba0f20bd4971baaad',
    creditor: '5a268f2ba0f20bd4971baaaf',
    quantity: 5,
    reason: 'Durum',
    status:  false
  },
  {
    debtor: '5a268f2ba0f20bd4971baaad',
    creditor: '5a268f2ba0f20bd4971baaac',
    quantity: 15,
    reason: 'Telepi',
    status:  true
  },
  {
    debtor: '5a268f2ba0f20bd4971baaad',
    creditor: '5a268f2ba0f20bd4971baaae',
    quantity: 10,
    reason: 'Cervezas',
    status:  true
  },
  {
    debtor: '5a268f2ba0f20bd4971baaaa',
    creditor: '5a268f2ba0f20bd4971baaac',
    quantity: 1.50,
    reason: 'Viaje metro',
    status:  true
  },
  {
    debtor: '5a268f2ba0f20bd4971baaac',
    creditor: '5a268f2ba0f20bd4971baaad',
    quantity: 1.50,
    reason: 'Tabaco',
    status:  true
  },
  {
    debtor: '5a268f2ba0f20bd4971baaaa',
    creditor: '5a268f2ba0f20bd4971baaad',
    quantity: 1.50,
    reason: 'Parque de Atracciones',
    status:  true
  }
];

const shopListPortions = [
  {
    _id: '5a2eae872c1be9407c4e42ca',
    owner: '5a268f2ba0f20bd4971baaae',
    products: [['Agua',2],['Leche',3],['Arroz',4],['Salmon',6]],
    totalPrice: 15
  },
  {
    _id: '5a2eae872c1be9407c4e42c9',
    owner: '5a268f2ba0f20bd4971baaac',
    products: [['Chocolate',4],['Ajoaseite',3]],
    totalPrice: 7
  },
  {
    _id: '5a2eae872c1be9407c4e42c8',
    owner: '5a268f2ba0f20bd4971baaad',
    products: [['Pepsi',5],['Entrecot de Buey',20],['Galletas',4],
    ['Salt',1], ['Barbacue Sauce',2.5]],
    totalPrice: 32.5
  },
  {
    _id: '5a2eae872c1be9407c4e42cb',
    owner: '5a268f2ba0f20bd4971baaad'
  }
];

const shopLists = [
  {
    owner: '5a268f2ba0f20bd4971baaaa',
    products: [
      '5a2eae872c1be9407c4e42ca',
      '5a2eae872c1be9407c4e42c9'
    ],
    house: '5a3000b10db40758c0501d9b',
    totalPrice: 15
  },
  {
    owner: '5a268f2ba0f20bd4971baaae',
    products: ['5a2eae872c1be9407c4e42c8'],
    house: '5a3000b10db40758c0501d9b',
    totalPrice: 5
  },
  {
    owner: '5a268f2ba0f20bd4971baaad',
    products: ['5a2eae872c1be9407c4e42cb'],
    house: '5a3041c8b31eae5d2489b95e',
    status: false,
    totalPrice: 9.80
  }
];

const houseInvitations = [
  {
    house: '5a3000b10db40758c0501d9b',
    destination: '5a268f2ba0f20bd4971baaac'
  }
];


createUsers = User.create(users);
createChores = Task.create(chores);
createHomes = House.create(homes);
createDebts = Debt.create(debts);
createShopListPortions = ShopPortion.create(shopListPortions);
createShopLists = ShopList.create(shopLists);
createHouseInvitations = HouseInvitation.create(houseInvitations);

Promise.all([createUsers,createChores,createHomes,createDebts,
   createShopListPortions, createShopLists, createHouseInvitations])
  .then(e => {
    console.log('Seeds added to the database');
    mongoose.connection.close();
  })
  .catch(e => console.log(e));
