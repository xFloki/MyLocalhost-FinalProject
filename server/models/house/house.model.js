const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    owner: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    },
    members: {
        type: [{
          type: mongoose.Schema.Types.ObjectId,
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
