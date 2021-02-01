const express = require('express');

const Trucks = require('../trucks/trucks-model.js')

const router = express.Router();



router.get('/', (req, res, next) => {
  Trucks.find()
    .then(trucks => {
      res.status(200).json(trucks);
    })
    .catch(error => {
      next(error)
    });
});

router.get('/:id', (req, res) => {
  res.status(200).json(req.params.id)
});

router.post('/', (req, res, next) => { // { name }
  Trucks.add(req.body)
    .then(truck => {
      res.status(201).json(truck);
    })
    .catch(error => {
      next(error)
    });
});

router.delete('/:id', (req, res, next) => {
  Trucks.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: 'The truck has been deleted!', count });
    })
    .catch(next);
});

router.put('/:id', (req, res) => {
  Trucks.update(req.params.id, req.body)
    .then(hub => {
      res.status(200).json(hub);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error updating the truck!',
      });
    });
});




// eslint-disable-next-line no-unused-vars
router.use((error, req, res, next) => {
  res.status(500).json({
    info: 'Something horrible happened inside the trucks router!',
    message: error.message,
    stack: error.stack,
  })
})

module.exports = router;
