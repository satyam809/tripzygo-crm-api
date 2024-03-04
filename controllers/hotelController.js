const Hotel = require('../models/hotel');
const multer = require('multer'); // Import multer for file uploads
const path = require('path');

// Multer configuration for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/voucher/'); // Specify the folder where files will be stored
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now(); // Get current timestamp
    const extension = path.extname(file.originalname); // Get file extension
    cb(null, `${timestamp}${extension}`); // Concatenate timestamp and extension for unique filename
  }
});

// Initialize multer with the specified storage configuration
exports.upload = multer({ storage: storage });

exports.createHotel = async (req, res) => {
    try {
        // Access the uploaded file information
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        // Save file information into the database (e.g., file path)
        req.body.voucher = file.filename;

        // Create hotel entry in the database
        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};