const Activity = require('../models/activity');
const multer = require('multer');
exports.upload = multer();

exports.create = async (req, res) => {
    try {
        const activity = new Activity(req.body);
        await activity.save();
        res.status(200).json({ status: true, data: activity, message: 'Activity created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.get = async (req, res) => {
    const activityId = req.params.id;
    try {
        const activity = await Activity.findById(activityId);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ status: true, data: activity, message: 'Activity retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Assuming you have already set up multer as shown in your code snippet

exports.update = async function (req, res) {
    const activitytId = req.params.id;
    try {
        // Check if a file was uploaded
        const activity = await Activity.findByIdAndUpdate(activityId, req.body, { new: true });
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ status: true, data: activity, message: 'Activity updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    const activityId = req.params.id;
    try {
        const activity = await Activity.findByIdAndDelete(activityId);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ status: true, data: activity, message: 'Activity deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getActivitiesByPayment = async function (req, res) {
    const paymentId = req.params.id;
    try {
        const activity = await Activity.find({ paymentId: paymentId });
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ status: true, data: activity, message: 'Activity retrieved successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

