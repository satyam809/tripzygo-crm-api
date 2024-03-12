// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Update this with your database configuration
const Country = require('./country');
const City = require('./city');
const Query = require('./query');

// Define the HotelMaster model
const Hotel = sequelize.define('hotelMaster', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  query_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Query',
      key: 'id'
    },
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  countryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Country',
      key: 'id'
    },
    allowNull: true
  },
  destination: {
    type: DataTypes.INTEGER,
    references: {
      model: 'City',
      key: 'id'
    },
    allowNull: true
  },
  hotel_destination: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  room_name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0
  },
  meal: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0
  },
  amenities: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '0'
  },
  hotelPhoto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  hotelType: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  hotel_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  checkIn: {
    type: DataTypes.STRING,
    allowNull: true
  },
  checkOut: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numOfAdults:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },numOfKids:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },numOfRooms:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  mapURL: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  addedBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  dateAdded: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  contactPerson: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  contactPersonEmail: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  contactPersonPhone: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  alternateEmail: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  alternatePhone: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  imgLink: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  voucher: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'hotelMaster', // Specify the table name if it's different
  timestamps: false // If you don't have timestamps in your table
});
Hotel.belongsTo(Country, { foreignKey: 'countryId', as: 'country' });
Hotel.belongsTo(City, { foreignKey: 'destination', as: 'city' });
Hotel.belongsTo(Query, { foreignKey: 'query_id', as: 'query' });

// Export the HotelMaster model
module.exports = Hotel;
