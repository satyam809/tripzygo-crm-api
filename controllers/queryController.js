const Query = require('../models/query');
const QuerySource = require('../models/querySource');
const Destination = require('../models/city');
const AssignedUser = require('../models/userMaster');
const PackagePayment = require('../models/packagePayment');

exports.getQuery = async (req, res) => {
    const { id } = req.params;
    try {
        const query = await Query.findByPk(id, {
            include: [
                {
                    model: QuerySource,
                    as: 'querySource'
                },
                {
                    model: Destination,
                    as: 'destination'
                },
                {
                    model: AssignedUser,
                    as: 'assignedUser'
                },
            ]
        });
        if (!query) {
            return res.status(404).json({ error: 'Query not found' });
        }

        // Now, fetch associated PackagePayments for the Query
        const packagePayments = await PackagePayment.findAll({
            where: {
                queryId: id // Filter by the queryId
            }
        });

        // Attach the packagePayments to the query object
        query.dataValues.packagePayments = packagePayments;

        res.json({ status: true, data: query });
    } catch (error) {
        console.error('Error fetching query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
