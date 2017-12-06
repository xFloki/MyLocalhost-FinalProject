const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');

const checkIDParam = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      message: 'Specified id is not valid'
    });
  }
  next();
};


const simpleCRUD = (Model) => {

  const model_properties = _.remove(Object.keys(Model.schema.paths), k=> !['_id','__v','created_at','updated_at'].includes(k));
  console.log(model_properties);

  const router = express.Router();
  /* List all elements from #{model} */
  router.get('/', (req, res, next) => {
    Model.find()
      .then(list => res.json(list))
      .catch(e => res.json(e));
  });


  /* Create a new #{model} */
  router.post('/', (req, res, next) => {

    const obj_data = _.pick(req.body, model_properties);
    const obj = new Model(obj_data);

    obj.save()
      .then(o => res.json(o))
      .catch(e => res.json(e));
  });

  /* GET a single Model. */
  router.get('/:id', checkIDParam, (req, res) => {
    Model.findById(req.params.id)
      .then(o => res.json(o))
      .catch(e => res.json(e));
  });

  /* EDIT a Model. */
  router.put('/:id', checkIDParam, (req, res) => {
    const updates = _.pick(req.body, model_properties);
    Model.findByIdAndUpdate(req.params.id, {
        new: true
      })
      .then(o => res.json(o))
      .catch(e => res.json(e));
  });

  /* DELETE a Model. */
  router.delete('/:id', checkIDParam, (req, res) => {

    Model.remove({
        _id: req.params.id
      })
      .then(o => res.json({
        message: 'Model has been removed!'
      }))
      .catch(e => res.json(e));
  });

  return router;
};

module.exports = simpleCRUD;
