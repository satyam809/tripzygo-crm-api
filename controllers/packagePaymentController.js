const PackagePayment = require('../models/packagePayment');
const Query = require('../models/query');
const Destination = require('../models/destination');
const QuerySource = require('../models/querySource');

exports.getPackagePaymentById = async (req, res) => {
    const { id } = req.params;
    try {
      const packagePaymentData = await PackagePayment.findByPk(id, {
        include: [
          {
            model: Query,
            as: 'query', // Assuming the association alias is 'query'
            include: [
              {
                model: Destination,
                as: 'destination' // Assuming the association alias is 'destination' in the Query model
              },
              {
                model: QuerySource,
                as: 'querySource', // Assuming the association alias is 'querySource' in the Destination model
              }
            ]
          }
        ]
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
