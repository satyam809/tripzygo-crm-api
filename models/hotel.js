const mongoose = require('mongoose');
const Payment = require('./payment');
const { Schema } = mongoose;

const hotelSchema = new Schema({
 paymentId: {
    type: Schema.Types.ObjectId,
        ref: Payment
 },
 queryId: String,
 name: String,
 destination: String,
 category: String,
 roomName: String,
 meal: String,
 hotelType: String,
 checkIn: String,
 checkOut: String,
 numOfAdults: Number,
 numOfKids: Number,
 numOfRooms: Number,
 voucher: String,
 status: { type: Number, required: true, default: 0 },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
