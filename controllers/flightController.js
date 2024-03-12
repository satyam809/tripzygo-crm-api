const Flight = require('../models/flights');
const multer = require('multer');
exports.upload = multer();

exports.createFlight = async (req, res) => {
    try {
        const flight = await Flight.create(req.body);
        res.status(200).json({ status: true, data: flight, message: 'Flight created successfully' });
    } catch (error) {
        res.status(400).json({ status: false,message: error.message });
    }
};
exports.updateFlight = async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await Flight.findByPk(id);
        if (!flight) {
            return res.status(404).json({ status: false,message: 'Flight not found' });
        }
        await flight.update({ ...req.body });

        res.status(200).json({ status: true, data: flight, message: 'Flight updated successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
exports.getFlight = async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await Flight.findByPk(id);
        if (!flight) {
            return res.status(404).json({ status: false,message: 'Flight not found' });
        }
        res.status(200).json({ status: true, data: flight, message: 'Flight retrieved successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
exports.getAllFlights = async function (req, res) {
    try {
        const flights = await Flight.findAll();
        res.status(200).json({ status: true, data: flights, message: 'Flights retrieved successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
