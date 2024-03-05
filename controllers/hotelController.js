const Hotel = require('../models/hotel');
const fs = require('fs');
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
exports.updatHotel = async (req, res) => {
  try {
    const hotelId = req.params.id;
    if (!hotelId) {
      return res.status(400).json({ status: false, message: 'Hotel ID is required' });
    }

    const hotel = await Hotel.findByPk(hotelId);
    if (!hotel) {
      return res.status(404).json({ status: false, message: 'Hotel not found' });
    }

    // Check if a file has been uploaded
    const file = req.file;
    if (file) {
      // If a new file is uploaded, delete the existing voucher file
      if (hotel.voucher) {
        const oldFilePath = path.join(__dirname, '..', 'uploads/voucher', hotel.voucher);
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            console.error('Error deleting old voucher file:', err);
          }
        });
      }

      // Update the voucher field with the new file name
      req.body.voucher = file.filename;
    }

    await hotel.update(req.body);
    res.status(200).json({ status: true, data: hotel, message: 'Hotel updated successfully' });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};
