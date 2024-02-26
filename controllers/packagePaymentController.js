const packagePayment = require('../models/PackagePayment');
exports.getPackagePaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await packagePayment.findByPk(id);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: "Package payment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

