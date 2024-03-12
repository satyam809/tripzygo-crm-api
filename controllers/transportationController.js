const Transportation = require('../models/transportation');
const multer = require('multer');
exports.upload = multer();

exports.createTransportation = async (req, res) => {
    try {
        const transportation = await Transportation.create(req.body);
        res.status(200).json({ status: true, data: transportation, message: 'Transportation created successfully' });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.updateTransportation = async (req, res) => {
    try {
        const { id } = req.params;
        const transportation = await Transportation.findByPk(id);

        if (!transportation) {
            return res.status(404).json({ status: false,message: 'Transportation not found' });
        }

        await transportation.update({ ...req.body });

        res.status(200).json({ status: true, data: transportation, message: 'Transportation updated successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

exports.getAllTransportations = async function (req, res) {
    try {
        const transportations = await Transportation.findAll();
        res.status(200).json({ status: true, data: transportations, message: 'Transportations retrieved successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
exports.getTransportation = async function (req, res){
    try {
        const { id } = req.params;
        const transportation = await Transportation.findByPk(id);
        if (!transportation) {
            return res.status(404).json({ status: false,message: 'Transportation not found' });
        }
        res.status(200).json({ status: true, data: transportation, message: 'Transportation retrieved successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}
