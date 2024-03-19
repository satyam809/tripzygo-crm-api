const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  name: String,
  status: Number
});

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;
