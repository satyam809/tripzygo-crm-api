const Guest = require('../models/guest');
const Document = require('../models/document');

exports.getGuestsByQuery = async (req, res) => {
    try {
        const queryId = req.params.id;

        // Find guests matching the queryId
        const guests = await Guest.find({ queryId });

        // Find documents associated with the guests
        const documents = await Document.find({ guestId: { $in: guests.map(guest => guest._id) } });

        // Combine guests and their documents
        const results = guests.map(guest => {
            const guestDocuments = documents.filter(doc => doc.guestId.equals(guest._id));
            return { guest, documents: guestDocuments };
        });

        res.status(200).json({ status: true, data: results, message: 'Fetched guests and their documents successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
