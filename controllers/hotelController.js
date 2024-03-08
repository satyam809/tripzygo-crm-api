const Hotel = require('../models/hotel');
const Country = require('../models/country');
const City = require('../models/city');
const fs = require('fs');
const multer = require('multer'); // Import multer for file uploads
const path = require('path');
const Sequelize = require('sequelize');

// Multer configuration for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/voucher/'); // Specify the folder where files will be stored
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now(); // Get current timestamp
    const extension = path.extname(file.originalname); // Get file extension
    cb(null, `${timestamp}${extension}`); // Concatenate timestamp and extension for unique filename
  }
});

// Initialize multer with the specified storage configuration
exports.upload = multer({ storage: storage });

exports.createHotel = async (req, res) => {
  try {
    // Access the uploaded file information
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No image uploaded' });
    }

    // Save file information into the database (e.g., file path)
    req.body.voucher = file.filename;

    // Create hotel entry in the database
    const hotel = await Hotel.create(req.body);
    res.status(200).json({ status: true, data: hotel, message: 'Hotel created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getHotel = async function (req, res) {
  try {
    const hotelId = req.params.id;
    if (!hotelId) {
      return res.status(400).json({ status: false, message: 'Hotel ID is required' });
    }
    const hotel = await Hotel.findByPk(hotelId);
    if (!hotel) {
      return res.status(404).json({ status: false, message: 'Hotel not found' });
    }
    res.status(200).json({ status: true, data: hotel, message: 'Hotel retrieved successfully' });
  } catch (errors) {
    res.status(400).json({ status: false, message: errors.message });
  }

}
exports.updatHotel = async (req, res) => {
  try {
    const hotelId = req.params.id;
    if (!hotelId) {
      return res.status(400).json({ status: false, message: 'Hotel ID is required' });
    }

    const hotel = await Hotel.findByPk(hotelId);
    if (!hotel) {
      return res.status(404).json({ status: false, message: 'Hotel not found' });
    }

    // Check if a file has been uploaded
    const file = req.file;
    if (file) {
      // If a new file is uploaded, delete the existing voucher file
      if (hotel.voucher) {
        const oldFilePath = path.join(__dirname, '..', 'uploads/voucher', hotel.voucher);
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            console.error('Error deleting old voucher file:', err);
          }
        });
      }

      // Update the voucher field with the new file name
      req.body.voucher = file.filename;
    }

    await hotel.update(req.body);
    res.status(200).json({ status: true, data: hotel, message: 'Hotel updated successfully' });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};


exports.searchHotel = async (req, res) => {
  try {
    console.log(req.params.search);
    const keyword = req.params.search;
    if (!keyword) {
      return res.status(400).json({ status: false, message: 'Write something' });
    }

    // Fetch IDs of matching countries and cities
    const matchingCountries = await Country.findAll({
      where: { name: { [Sequelize.Op.like]: `%${keyword}%` } },
      attributes: ['id']
    });
    const matchingCities = await City.findAll({
      where: { name: { [Sequelize.Op.like]: `%${keyword}%` } },
      attributes: ['id']
    });

    // Extract IDs for use in conditions
    const countryIds = matchingCountries.map(country => country.id);
    const cityIds = matchingCities.map(city => city.id);

    // Initialize query conditions
    let conditions = {
      [Sequelize.Op.or]: [
        { name: { [Sequelize.Op.like]: `%${keyword}%` } }, // Search by hotel name
        { address: { [Sequelize.Op.like]: `%${keyword}%` } } // Search by hotel address
      ]
    };

    // Adjust conditions to include matching countries and cities
    if (countryIds.length > 0) {
      conditions[Sequelize.Op.or].push({
        countryId: { [Sequelize.Op.in]: countryIds }
      });
    }
    if (cityIds.length > 0) {
      conditions[Sequelize.Op.or].push({
        destination: { [Sequelize.Op.in]: cityIds }
      });
    }

    // Perform the search
    const hotels = await Hotel.findAll({
      where: conditions,
      include: [
        { model: Country, as: 'country' },
        { model: City, as: 'city' }
      ]
    });

    // Respond with the search results
    res.status(200).json({ status: true, message: 'Search results', data: hotels });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ status: false, message: 'An error occurred' });
  }
};

exports.getAllQueryHotel = async function (req, res) {
  const queryId = req.params.id; // Assuming you're getting the query_id from the request parameters
  try {
    const hotels = await Hotel.findAll({
      where: {
        query_id: queryId
      }
    });

    res.status(200).json({ status: true, message: 'Hotels found', data: hotels });
  } catch (error) {
    res.status(500).json({ status: false, message: 'An error occurred' });
  }
}










