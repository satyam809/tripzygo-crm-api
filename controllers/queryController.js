const Query = require('../models/query');

exports.getQuery = async (req, res) => {
    const { id } = req.params;
    try {
        const query = await Query.findOne({
            where: { id },
            rejectOnEmpty: true, // This will throw an error if no record is found
        });
        res.json({ status: true, data: query });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
