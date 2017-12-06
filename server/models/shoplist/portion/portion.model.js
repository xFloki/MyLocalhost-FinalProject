const mongoose = require('mongoose');

const portionSchema = new mongoose.Schema(
  {
    owner: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    },
    products: {
        type: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Portion'
        }]
    },
    status: {
        type: Boolean,
        default: true
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    closedDate: {
        type: Date
    }
}, {
    timestamps: true
});

const Portion = mongoose.model('Portion', portionSchema);

module.exports = Portion;
