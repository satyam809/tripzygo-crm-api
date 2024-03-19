const Visa = require('../models/visa');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/visa/'); // Specify the folder where files will be stored
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now(); // Get current timestamp
        const extension = path.extname(file.originalname); // Get file extension
        cb(null, `${timestamp}${extension}`); // Concatenate timestamp and extension for unique filename
    }
});
const upload = multer({ storage: storage });
exports.upload = upload;


exports.create = async (req, res) => {
    //console.log(req.body);
    try {
        if(req.file){
            req.body.file = req.file.filename
        }
        const visa = new Visa(req.body);
        await visa.save();
        res.status(200).json({ status: true, data: visa, message: 'Visa created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.get = async (req, res) => {
    const id = req.params.id;
    try {
        const visa = await Visa.findById(id);
        if (!visa) {
            return res.status(404).json({ message: 'Visa not found' });
        }
        res.status(200).json({ status: true, data: visa, message: 'Visa retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Assuming you have already set up multer as shown in your code snippet

exports.update = async function (req, res) {
    const id = req.params.id;
    console.log(req.file);
    try {
        // Check if a file was uploaded
        if (req.file) {
            // Path to the old visa image
            const oldVisaPath = path.join(__dirname, '../uploads/visa/', req.file.filename);

            // Delete the old visa image if it exists
            if (fs.existsSync(oldVisaPath)) {
                fs.unlinkSync(oldVisaPath);
            }

            // Update the visa document with the new visa image information
            req.body.file = req.file.filename;
            const visa = await Visa.findByIdAndUpdate(id, req.body, { new: true });
            if (!visa) {
                return res.status(404).json({ message: 'Visa not found' });
            }
            res.status(200).json({ status: true, data: visa, message: 'Visa updated successfully with new file' });
        } else {
            const visa = await Visa.findByIdAndUpdate(id, req.body, { new: true });
            if (!visa) {
                return res.status(404).json({ message: 'Visa not found' });
            }
            res.status(200).json({ status: true, data: visa, message: 'Visa updated successfully' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const visa = await Visa.findByIdAndDelete(id);
        if (!visa) {
            return res.status(404).json({ message: 'Visa not found' });
        }
        res.status(200).json({ status: true, data: visa, message: 'Visa deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getVisaByPayment = async function (req, res) {
    const paymentId = req.params.id;
    try {
        const visa = await Visa.find({ paymentId: paymentId });
        if (!visa) {
            return res.status(404).json({ message: 'Visa not found' });
        }
        res.status(200).json({ status: true, data: visa, message: 'Visa retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

