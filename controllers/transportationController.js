const Transportation = require('../models/transportation');
const multer = require('multer');
exports.upload = multer();

exports.create = async (req, res) => {
    try {
        const transportation = new Transportation(req.body);
        await transportation.save();
        res.status(200).json({ status: true, data: transportation, message: 'Transportation created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.get = async (req, res) => {
    const id = req.params.id;
    try {
        const transportation = await Transportation.findById(id);
        if (!transportation) {
            return res.status(404).json({ message: 'Transportation not found' });
        }
        res.status(200).json({ status: true, data: transportation, message: 'Transportation retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Assuming you have already set up multer as shown in your code snippet

exports.update = async function (req, res) {
    const id = req.params.id;
    try {
        // Check if a file was uploaded
        const transportation = await Transportation.findByIdAndUpdate(id, req.body, { new: true });
        if (!transportation) {
            return res.status(404).json({ message: 'Transportation not found' });
        }
        res.status(200).json({ status: true, data: transportation, message: 'Transportation updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const transportation = await Transportation.findByIdAndDelete(id);
        if (!transportation) {
            return res.status(404).json({ message: 'Transportation not found' });
        }
        res.status(200).json({ status: true, data: transportation, message: 'Transportation deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTransportationsByPayment = async function (req, res) {
    const paymentId = req.params.id;
    try {
        const transportation = await Transportation.find({ paymentId: paymentId });
        if (!transportation) {
            return res.status(404).json({ message: 'Transportation not found' });
        }
        res.status(200).json({ status: true, data: transportation, message: 'Transportation retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

