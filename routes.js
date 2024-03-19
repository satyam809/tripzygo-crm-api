const express = require('express');
const router = express.Router();
const hotelController = require('./controllers/hotelController');
const flightController = require('./controllers/flightController');
const activityController = require('./controllers/activityController');
const paymentController = require('./controllers/paymentController');
const queryController = require('./controllers/queryController');
const transportationController = require('./controllers/transportationController');
const visaController = require('./controllers/visaController');
const guestController = require('./controllers/guestController');


router.post('/api/hotel', hotelController.upload.single('voucher'), hotelController.createHotel);
router.get('/api/hotel/:id', hotelController.getHotel);
router.put('/api/hotel/:id', hotelController.upload.single('voucher'), hotelController.updateHotel);
router.delete('/api/hotel/:id', hotelController.deleteHotel);
router.get('/api/hotelsByPayment/:id', hotelController.getHotelsByPayment);

router.post('/api/flight', flightController.upload.none(), flightController.createFlight);
router.get('/api/flight/:id', flightController.getFlight);
router.put('/api/flight/:id', flightController.upload.none(), flightController.updateFlight);
router.delete('/api/flight/:id', flightController.deleteFlight);
router.get('/api/flightsByPayment/:id', flightController.getFlightsByPayment);

router.post('/api/activity', activityController.upload.none(), activityController.create);
router.get('/api/activity/:id', activityController.get);
router.put('/api/activity/:id', activityController.upload.none(), activityController.update);
router.delete('/api/activity/:id', activityController.delete);
router.get('/api/activitysByPayment/:id', activityController.getActivitiesByPayment);

router.post('/api/transportation', transportationController.upload.none(), transportationController.create);
router.get('/api/transportation/:id', transportationController.get);
router.put('/api/transportation/:id', transportationController.upload.none(), transportationController.update);
router.delete('/api/transportation/:id', transportationController.delete);
router.get('/api/transportationsByPayment/:id', transportationController.getTransportationsByPayment);

router.post('/api/visa', visaController.upload.single('file'), visaController.create);
router.get('/api/visa/:id', visaController.get);
router.put('/api/visa/:id',visaController.upload.single('file'), visaController.update);
router.delete('/api/visa/:id', visaController.delete);
router.get('/api/visaByPayment/:id', visaController.getVisaByPayment);

router.get('/api/payment', paymentController.getAllPayments);

router.get('/api/queryByPayment/:id', queryController.getQueryByPayment);
router.get('/api/guestsByQuery/:id', guestController.getGuestsByQuery);


module.exports = router;
