const Hotel = require('../models/hotel');
const fs = require('fs');
const multer = require('multer');
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
const upload = multer({ storage: storage });

exports.createHotel = async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.status(200).json({ status: true, data: hotel, message: 'Hotel created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getHotel = async (req, res) => {
    const hotelId = req.params.id;
    try {
        const hotel = await Hotel.findById(hotelId);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json({ status: true, data: hotel, message: 'Hotel retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Assuming you have already set up multer as shown in your code snippet

exports.updateHotel = async function (req, res) {
    const id = req.params.id;
    try {
        // Check if a file was uploaded
        if (req.file) {
            // Path to the old visa image
            const oldVoucherPath = path.join(__dirname, '../uploads/voucher/', req.file.filename);

            // Delete the old visa image if it exists
            if (fs.existsSync(oldVoucherPath)) {
                fs.unlinkSync(oldVoucherPath);
            }

            // Update the visa document with the new visa image information
            req.body.voucher = req.file.filename;
            console.log(req.body);
            const hotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            res.status(200).json({ status: true, data: hotel, message: 'Hotel updated successfully with new file' });
        } else {
            const hotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            res.status(200).json({ status: true, data: hotel, message: 'Hotel updated successfully' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteHotel = async (req, res) => {
    const hotelId = req.params.id;
    try {
        const hotel = await Hotel.findByIdAndDelete(hotelId);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json({ status: true, data: hotel, message: 'Hotel deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getHotelsByPayment = async function(req, res) {
    const paymentId = req.params.id;
    try {
        const results = await Hotel.find({ paymentId: paymentId });
        res.status(200).json({ status: true, data: results, message: 'Fetched hotels by payment ID successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



// Export the upload middleware
exports.upload = upload;
