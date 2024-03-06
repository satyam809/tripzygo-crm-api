const Query = require('../models/query');
const QuerySource = require('../models/querySource');
const Destination = require('../models/destination');

exports.getQuery = async (req, res) => {
    const { id } = req.params;
    try {
        const query = await Query.findByPk(id, {
            include: [
                {
                    model: QuerySource,
                    as: 'querySource' // Corrected alias to match the association
                },{
                    model: Destination,
                    as: 'destination' // Corrected alias to match the association
                }
            ]
        });
        if (!query) {
            return res.status(404).json({ error: 'Query not found' }); // Corrected error message
        }
        res.json({ status: true, data: query });
    } catch (error) {
        console.error('Error fetching query:', error); // Corrected error message
        res.status(500).json({ error: 'Internal server error' });
    }
};
