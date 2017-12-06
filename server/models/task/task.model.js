const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Name is required']
    },
    description: {
        type: String
    },
    estimatedTime: {
        type: Number
    }
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
