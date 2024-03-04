const Transportation = require('../models/transportation');
const multer = require('multer');
exports.upload = multer();

exports.createTransportation = async (req, res) => {
    try {
        console.log(req.body);
        const transportation = await Transportation.create(req.body);
        res.status(201).json(transportation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
