
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


// const mongoose = require('mongoose');
// const db = process.env.MONGODB_URI;

// mongoose.connect(db, { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected...'))
// .catch(err => console.log(err));


