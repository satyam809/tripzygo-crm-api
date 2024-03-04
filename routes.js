const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const packagePaymentController = require('./controllers/packagePaymentController');
const hotelController = require('./controllers/hotelController');
const activityController = require('./controllers/activityController');
const flightController = require('./controllers/flightController');
const transportationController = require('./controllers/transportationController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/api/packagePayment', packagePaymentController.getAllPackagePayments);
router.get('/api/packagePayment/:id', packagePaymentController.getPackagePaymentById);

// Specify multer configuration in hotelController.js
router.post('/api/hotel', hotelController.upload.single('voucher'), hotelController.createHotel);


router.post('/api/activity', activityController.upload.none(), activityController.createActivity);


router.post('/api/flight', flightController.upload.none(), flightController.createFlight);
router.put('/api/flight/:id', flightController.upload.none(), flightController.updateFlight);


router.post('/api/transportation', transportationController.upload.none(), transportationController.createTransportation);
router.put('/api/transportation/:id', transportationController.upload.none(), transportationController.updateTransportation);

module.exports = router;