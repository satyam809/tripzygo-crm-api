const Activity = require('../models/activity');
const multer = require('multer');
exports.upload = multer();

exports.createActivity = async (req, res) => {
    try {
        const activity = await Activity.create(req.body);
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
