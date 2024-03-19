const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  stateId: Number,
  name:String,
  status: Number,
  modifyBy: Number,
  addedBy: Number,
  dateAdded: Number,
  modifyDate: Number,
  deletestatus: Number
});

const City = mongoose.model('cities', citySchema);

module.exports = City;
