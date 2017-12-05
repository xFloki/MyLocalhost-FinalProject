const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    Owner: {
      type: type: { 
        type: Schema.ObjectId,
        ref: 'User'
      }
      unique:true,
      required: [true, 'Name is required']
    },
    members: {
        type: [{
          type: Schema.ObjectId,
          ref: 'User'
        }]
    },
    street: {
        type: String,
        required: [true, 'Street is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    street: {
        type: String,
        required: [true, 'Country is required']
    }
}, {
    timestamps: true
});

const House = mongoose.model('House', houseSchema);

module.exports = House;
