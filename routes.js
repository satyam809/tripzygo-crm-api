// routes.js
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const packagePaymentController = require('./controllers/packagePaymentController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/packagePayment/:id', packagePaymentController.getPackagePaymentById);

module.exports = router;
