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

exports.getAllPackagePayments = async (req, res) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    const pageSize = parseInt(req.query.pageSize) || 10; // Default page size is 10

    // Calculate offset
    const offset = (page - 1) * pageSize;

    // Fetch package payments with pagination
    const packagePayments = await PackagePayment.findAll({
      include: [
        {
          model: Query,
          as: 'query',
          include: [
            {
              model: Destination,
              as: 'destination'
            },
            {
              model: QuerySource,
              as: 'querySource'
            }
          ]
        }
      ],
      limit: pageSize, // Limit number of results per page
      offset: offset // Offset for pagination
    });

    if (!packagePayments.length) {
      return res.status(404).json({ error: 'Package payments not found' });
    }

    res.json(packagePayments);
  } catch (error) {
    console.error('Error fetching package payments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
