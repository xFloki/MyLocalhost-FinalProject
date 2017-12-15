const mongoose = require('mongoose');

const portionSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    products: [],
    status: {
        type: Boolean,
        default: false
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
