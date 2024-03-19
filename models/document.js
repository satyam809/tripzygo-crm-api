const mongoose = require('mongoose');
const Guest = require('./guest');
const User = require('./user');
const { Schema } = mongoose;

const documentSchema = new Schema({
    documentType: String,
    document: String,
    guestId: {
        type: Schema.Types.ObjectId,
        ref: Guest // Reference to the User model
    },
    dateAdded: String,
    addedBy:{
        type: Schema.Types.ObjectId,
        ref: User // Reference to the User model
    }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
