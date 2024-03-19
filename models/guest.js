const mongoose = require('mongoose');
const Query = require('./Query');
const User = require('./User');
const { Schema } = mongoose;

const guestSchema = new Schema({
    queryId: {
        type: Schema.Types.ObjectId,
        ref: Query // Reference to the Payment model
    },
    submitName: String,
    firstName: String,
    lastName: String,
    gender: String,
    dob: String, // Changed to Date type
    whatsapp: String,
    verify: String,
    isDrive: { type: Date, default: Date.now },
    dateAdded: { type: Date, default: Date.now } ,
    addedBy:{
        type: Schema.Types.ObjectId,
        ref: User // Reference to the User model
    }
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
