const mongoose = require('mongoose');

const shopListSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    products:  [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Portion'
    }],
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

const ShopList = mongoose.model('ShopList', shopListSchema);

module.exports = ShopList;
