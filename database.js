// db.js
// const mongoose = require('mongoose');

// const uri = 'mongodb://localhost:27017/tripzygoCrm'; // MongoDB connection URI

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// module.exports = mongoose.connection;

require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI; // MongoDB connection URI loaded from environment variable

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;


