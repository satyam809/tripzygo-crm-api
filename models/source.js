const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  name: String,
  status: Number
});

const Source = mongoose.model('sources', sourceSchema);

module.exports = Source;
