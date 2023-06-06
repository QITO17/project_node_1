const express = require('express');
const repairControllers = require('../controllers/repair.controllers');
const router = express.Router();

router
  .route('/')
  .get(repairControllers.findRepairs)
  .post(repairControllers.createRepairs);

router
  .route('/:id')
  .get(repairControllers.findOneRepairs)
  .delete(repairControllers.cancelleRepairs)
  .patch(repairControllers.completeRepairs);

module.exports = router;
