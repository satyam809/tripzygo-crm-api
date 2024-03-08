const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const packagePaymentController = require('./controllers/packagePaymentController');
const hotelController = require('./controllers/hotelController');
const activityController = require('./controllers/activityController');
const flightController = require('./controllers/flightController');
const transportationController = require('./controllers/transportationController');
const queryController = require('./controllers/queryController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/api/packagePayment', packagePaymentController.getAllPackagePayments);
router.get('/api/packagePayment/:id', packagePaymentController.getPackagePaymentById);

router.get('/api/query/:id', queryController.getQuery);

// Specify multer configuration in hotelController.js
router.get('/api/hotel/search/:search', hotelController.searchHotel);
router.post('/api/hotel', hotelController.upload.single('voucher'), hotelController.createHotel);
router.put('/api/hotel/:id', hotelController.upload.single('voucher'), hotelController.updatHotel);


router.post('/api/activity', activityController.upload.none(), activityController.createActivity);
router.put('/api/activity/:id', activityController.upload.none(), activityController.updateActivity);


router.post('/api/flight', flightController.upload.none(), flightController.createFlight);
router.put('/api/flight/:id', flightController.upload.none(), flightController.updateFlight);


router.post('/api/transportation', transportationController.upload.none(), transportationController.createTransportation);
router.put('/api/transportation/:id', transportationController.upload.none(), transportationController.updateTransportation);

module.exports = router;