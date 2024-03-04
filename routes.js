const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const packagePaymentController = require('./controllers/packagePaymentController');
const hotelController = require('./controllers/hotelController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/api/packagePayment', packagePaymentController.getAllPackagePayments);
router.get('/api/packagePayment/:id', packagePaymentController.getPackagePaymentById);

// Specify multer configuration in hotelController.js
router.post('/api/hotel', hotelController.upload.single('voucher'), hotelController.createHotel);
router.get('/api/test',(req,res)=>{
    res.send('test');
})

module.exports = router;