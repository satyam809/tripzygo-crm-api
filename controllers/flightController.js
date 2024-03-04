const Flight = require('../models/flights');
const multer = require('multer');
exports.upload = multer();

exports.createFlight = async (req, res) => {
    try {
        console.log(req.body);
        const flight = await Flight.create(req.body);
        res.status(201).json(flight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
