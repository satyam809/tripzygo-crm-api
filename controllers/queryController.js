const Payment = require('../models/payment');

exports.getQueryByPayment = async (req, res) => {
    const id = req.params.id;
    try {
        const payment = await Payment.findById(id)
            .populate({
                path: 'queryId',
                populate: [
                    { path: 'clientId' },
                    { path: 'destinationId' },
                    { path: 'assignTo' },
                    { path: 'addedBy' },
                    { path: 'sourceId' }
                ]
            })
            .populate('packageId').populate('paymentBy');


        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json({ status: true, data: payment, message: 'Fetched payment successfully' }); // Changed from `query` to `payment`
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
