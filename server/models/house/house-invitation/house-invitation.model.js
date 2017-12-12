const mongoose = require('mongoose');

const houseInvitationSchema = new mongoose.Schema({
    house: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'House',
      required: true
    },
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    message: {
      type: String
    }
}, {
    timestamps: true
});


const HouseInvitation = mongoose.model('HouseInvitation', houseInvitationSchema);

module.exports = HouseInvitation;
