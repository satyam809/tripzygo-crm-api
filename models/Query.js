const mongoose = require('mongoose');
const ClientAndSupplier = require('./clientAndSupplier');
const City = require('./City');
const Source = require('./Source');
const User = require('./User');
const { Schema } = mongoose;

const querySchema = new Schema({
 clientId: {
    type: Schema.Types.ObjectId,
        ref: ClientAndSupplier
 },
 name: String,
 email: String,
 phone: Number,
 destinationId: {
    type: Schema.Types.ObjectId,
        ref: City
 },
 startDate: String,
 endDate: String,
 serviceId: String,
 adult: Number,
 child: Number,
 infant: Number,
 details: Number,
 statusId: Number,
 sourceId: {
    type: Schema.Types.ObjectId,
        ref: Source
 },
 assignTo: {
    type: Schema.Types.ObjectId,
        ref: User
 },
 addedBy: {
    type: Schema.Types.ObjectId,
        ref: User
 },
 fromCity: String,
 lockPostSaleSupplier: String,
 priorityStatus: String,
 status_updateDate:String,
 query_cancel:String,
 whatshapp_stickyid:String,
 instagramid: String,
 ad_name:String,
 createdAt: String,
 updatedAt: String
 //createdAt: { type: Date, default: Date.now },
 //updatedAt: { type: Date, default: Date.now }
}, {
 collection: 'queries',
 timestamps: true, // Enable automatic timestamps
 versionKey: '__v', // Enable versioning
 minimize: false // Override default behavior to store empty objects
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
