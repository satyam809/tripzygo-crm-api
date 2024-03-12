const PackageBuilderEvent = require('../models/packageBuilderEvent');
const multer = require('multer');
exports.upload = multer();

exports.saveVisa = async (req, res) => {
    try {
        const results = await PackageBuilderEvent.create({...req.body,sectionType:'feeInsurance'});
        res.status(200).json({ status: true, data: results, message: 'Visa saved successfully' });
    } catch (error) {
        res.status(400).json({ status: false,message: error.message });
    }
};
exports.updateVisa = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await PackageBuilderEvent.findByPk(id);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Id not found' });
        }
        // Correctly update the instance found by findByPk
        await result.update(req.body);

        // Refresh the instance to get the updated values
        const updatedResult = await PackageBuilderEvent.findByPk(id);

        res.status(200).json({ status: true, data: updatedResult, message: 'Visa updated successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

exports.getPackageVisa = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await PackageBuilderEvent.findByPk(id);
        if (!result) {
            return res.status(404).json({ status: false,message: 'Id not found' });
        }
        res.status(200).json({ status: true, data: result, message: 'Retrieved successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
exports.getAllPackageVisa = async function (req, res) {
    const packageId = req.params.packageId;
    try {
        const results = await PackageBuilderEvent.findAll({
            where: {
                packageId:packageId
            }
        });
        res.status(200).json({ status: true, data: results, message: 'Visa retrieved successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
exports.deleteVisa = async function (req, res) {
    const { id } = req.params;
    try {
        const deleted = await PackageBuilderEvent.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.json({  status: true, message: "Visa deleted successfully" });
        } else {
            res.status(404).json({  status: false,message: "Id not found" });
        }
    } catch (error) {
        res.status(500).json({  status: false,message: error.message });
    }
};
