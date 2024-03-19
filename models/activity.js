const mongoose = require('mongoose');
const Payment = require('./payment');
const { Schema } = mongoose;

const activitySchema = new Schema({
    paymentId: {
        type: Schema.Types.ObjectId,
        ref: Payment // Reference to the Payment model
    },
    name: String,
    destination: String,
    type: String,
    date: Date, // Changed to Date type
    startTime: String,
    endTime: String,
    createdAt: { type: Date, default: Date.now }, // Use default value for createdAt
    updatedAt: { type: Date, default: Date.now } // Use default value for updatedAt
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
