const Activity = require('../models/activity');
const multer = require('multer');
exports.upload = multer();

exports.createActivity = async (req, res) => {
    try {
        const activity = await Activity.create(req.body);
        res.status(200).json({ status: true, data: activity, message: 'Activity created successfully' });
    } catch (error) {
        res.status(400).json({ status: false,message: error.message });
    }
};
exports.updateActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity.findByPk(id);
        if (!activity) {
            return res.status(404).json({ status: false,message: 'Activity not found' });
        }
        await activity.update({ ...req.body });

        res.status(200).json({ status: true, data: activity, message: 'Activity updated successfully' });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
