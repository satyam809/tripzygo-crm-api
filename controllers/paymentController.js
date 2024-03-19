const Payment = require('../models/payment');
const Hotel = require('../models/hotel');

exports.getAllPayments = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Current page, default is 1
        const limit = parseInt(req.query.limit) || 10; // Number of payments per page, default is 10

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const total = await Payment.countDocuments();
        const totalPages = Math.ceil(total / limit);

        const payments = await Payment.find()
            .skip(startIndex)
            .limit(limit)
            .populate('packageId')
            .populate('paymentBy') // Populate the paymentBy field
            .populate('queryId'); // Populate the queryId field

        const paginationInfo = {
            currentPage: page,
            totalPages: totalPages,
            totalRecords: total,
            length: payments.length
        };

        res.status(200).json({ status: true, data: payments, pagination: paginationInfo, message: 'Fetched payments successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


