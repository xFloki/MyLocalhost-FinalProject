const mongoose = require('mongoose');

const weekTaskSchema = new mongoose.Schema(
  {
    assigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
      required: true
    },
    week: {
        type: Number
    },
    closedDate: {
        type: Date
    }
}, {
    timestamps: true
});

const WeekTask = mongoose.model('WeekTask', weekTaskSchema);

module.exports = WeekTask;
