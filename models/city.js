// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Update this with your database configuration

// Define the CityMaster model
const CityMaster = sequelize.define('citymaster', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  stateId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  modifyBy: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  addedBy: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  dateAdded: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  modifyDate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  deletestatus: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'cityMaster', // Specify the table name if it's different
  timestamps: false // If you don't have timestamps in your table
});

// Export the CityMaster model
module.exports = CityMaster;
