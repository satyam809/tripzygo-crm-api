const PackagePayment = require('../models/packagePayment');
const Query = require('../models/query');

exports.getPackagePaymentById = async (req, res) => {
    const { id } = req.params;
    try {
      const packagePaymentData = await PackagePayment.findByPk(id, {
        include: {
          model: Query,
          as: 'query' // Assuming the association alias is 'query'
        }
      });
      if (!packagePaymentData) {
        return res.status(404).json({ error: 'Package payment not found' });
      }
      res.json(packagePaymentData);
    } catch (error) {
      console.error('Error fetching package payment:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};
