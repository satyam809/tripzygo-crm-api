const Query = require('../models/query');
const QuerySource = require('../models/querySource');
const Destination = require('../models/city');
const AssignedUser = require('../models/userMaster');
const PackagePayment = require('../models/packagePayment');
const Guest = require('../models/guest');
const GuestDoc = require('../models/guestDocument');

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
exports.getQueryGuest = async (req, res) => {
    const queryId = req.params.id;
    try {
        const query = await Guest.findAll({
            where: {
                queryId: queryId
            }
        });
        
        if (!query || query.length === 0) {
            return res.status(404).json({ error: 'Query not found' });
        }
        const guestDoc = await GuestDoc.findAll({
            where: {
                queryId: queryId
            }
        });

        // Iterate over each item in the query array and attach the guestDoc
        query.forEach(item => {
            item.dataValues.guestDoc = guestDoc;
        });

        res.json({ status: true, data: query });
    } catch (error) {
        console.error('Error fetching query:', error);
        res.status(500).json({ error: error });
    }
};

