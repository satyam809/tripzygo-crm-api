const Flight = require('../models/flight');
const multer = require('multer');
exports.upload = multer();

exports.createFlight = async (req, res) => {
    try {
        const flight = new Flight(req.body);
        await flight.save();
        res.status(200).json({ status: true, data: flight, message: 'Flight created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getFlight = async (req, res) => {
    const flightId = req.params.id;
    try {
        const flight = await Flight.findById(flightId);
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.status(200).json({ status: true, data: flight, message: 'Flight retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Assuming you have already set up multer as shown in your code snippet

exports.updateFlight = async function (req, res) {
    const flightId = req.params.id;
    try {
        // Check if a file was uploaded
        const flight = await Flight.findByIdAndUpdate(flightId, req.body, { new: true });
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.status(200).json({ status: true, data: flight, message: 'Flight updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFlight = async (req, res) => {
    const flightId = req.params.id;
    try {
        const flight = await Flight.findByIdAndDelete(flightId);
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.status(200).json({ status: true, data: flight, message: 'Flight deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getFlightsByPayment = async function (req, res) {
    const paymentId = req.params.id;
    try {
        const flight = await Flight.find({ paymentId: paymentId });
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.status(200).json({ status: true, data: flight, message: 'Flight retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

