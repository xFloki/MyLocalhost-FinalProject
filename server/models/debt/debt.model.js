const mongoose = require('mongoose');

const debtSchema = new mongoose.Schema(
  {
    debtor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    creditor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },
    reason: {
        type: String
    }
}, {
    timestamps: true
});

const Debt = mongoose.model('Debt', debtSchema);

module.exports = Debt;
