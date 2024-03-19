const mongoose = require('mongoose');
const Payment = require('./payment');
const { Schema } = mongoose;

const visaSchema = new Schema({
    paymentId: {
        type: Schema.Types.ObjectId,
        ref: Payment // Reference to the Payment model
    },
    name: String,
    destination: String,
    date: { type: Date, default: Date.now }, // Corrected to use Date.now as default
    file: String,
    createdAt: { type: Date, default: Date.now }, // Use default value for createdAt
    updatedAt: { type: Date, default: Date.now } // Use default value for updatedAt
});

const Visa = mongoose.model('Visa', visaSchema);

module.exports = Visa;
