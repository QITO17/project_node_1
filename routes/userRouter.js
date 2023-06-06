const express = require('express');
const userControllers = require('../controllers/user.controllers');
const router = express.Router();

router
  .route('/')
  .get(userControllers.findUser)
  .post(userControllers.createUser);

router
  .route('/:id')
  .get(userControllers.findOneUser)
  .delete(userControllers.deleteOneUser)
  .patch(userControllers.updateOneUser);

module.exports = router;
