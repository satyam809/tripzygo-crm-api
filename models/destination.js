// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming your Sequelize connection instance is exported from this file

// Define the Destination model
const Destination = sequelize.define('destination', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  countryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  dateAdded: {
    type: DataTypes.DATE,
    allowNull: false
  },
  addedBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  themephoto: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  themefooterphoto: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  tagline: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  videoURL: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'destinationmaster', // Specify the table name
  timestamps: false, // Disable timestamps
  // Other options such as freezeTableName, underscored, etc. can be added here
});

// Export the Destination model
module.exports = Destination;
