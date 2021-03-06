const WeekTask = require('./weektask.model');

module.exports = {

 list: (req, res, next) => {
   console.log(req.user);
   let id = req.user._id;
   WeekTask.find({week: new Date().getMonth(), assigned: id },
    {task: 1, _id:0 }).populate('task')
    .then(e => {
      res.status(200).json(e);
    })
    .catch(err => res.status(500).json(err) );
 },

 assign: (req, res, next) => {
   let id = req.body.userId;
   let taskId = req.body.taskId;
   const newWeekTask = new WeekTask ({
      assigned: id,
      task: taskId,
      week: new Date().getMonth()
    });

    newWeekTask.save()
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json(err));

 }

};
