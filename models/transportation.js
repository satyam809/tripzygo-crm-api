const mongoose = require('mongoose');
const Payment = require('./payment');
const { Schema } = mongoose;

const transportationSchema = new Schema({
    paymentId: {
        type: Schema.Types.ObjectId,
        ref: Payment // Reference to the Payment model
    },
    name: String,
    transferType: String,
    destination: String,
    date: Date, // Changed to Date type
    startTime: String,
    endTime: String,
    createdAt: { type: Date, default: Date.now }, // Use default value for createdAt
    updatedAt: { type: Date, default: Date.now } // Use default value for updatedAt
});

const Transportation = mongoose.model('Transportation', transportationSchema);

module.exports = Transportation;
