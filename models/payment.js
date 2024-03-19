const mongoose = require('mongoose');
const User = require('./User');
const Query = require('./Query');
const Package = require('./Package');
const { Schema } = mongoose;

const paymentSchema = new Schema({
    paymentId: String,
    queryId: {
        type: Schema.Types.ObjectId,
        ref: Query // Reference to the Query model
    },
    packageId: {
        type: Schema.Types.ObjectId,
        ref: Package // Reference to the Package model
    },
    amount: Number,
    paymentStatus: Number,
    paymentDate: String,
    paymentBy: {
        type: Schema.Types.ObjectId,
        ref: User // Reference to the User model
    },
    transectionType: String,
    paymentLinkDate: String,
    paymentWithoutLinkDate: String,
    conFee: Number,
    payment_verified: Number,
    receiptFile: String,
    remark: String,
    permission_status: String,
});

const Payment = mongoose.model('payments', paymentSchema);

module.exports = Payment;
