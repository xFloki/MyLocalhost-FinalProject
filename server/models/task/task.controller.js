const Task = require('./task.model');
const WeekTask = require('../weektask/weektask.model');

module.exports = {

 listUnassigned: (req, res, next) => {
   WeekTask.find({}, {task:1, _id:0})
   .then(e => {
     let taskTaken = [];
     e.forEach(task =>{
       taskTaken.push(task.task);
     });
     Task.find( { _id: { $nin: taskTaken } } )
     .then(result => res.status(200).json(result));
   });

 }

};
