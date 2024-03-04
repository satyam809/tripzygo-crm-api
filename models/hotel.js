// Import Sequelize and the connection instance
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const Query = require('./query');
const Destination = require('./destination');

// Define the Destination model
const Hotel = sequelize.define('hotel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  queryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Query',
      key: 'id'
    },
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  destination_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Destination',
      key: 'id'
    },
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  room_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  meal: {
    type: DataTypes.STRING
  },
  checkinDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  checkoutDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  checkInTime: {
    type: DataTypes.TIME,
    allowNull: true
  },
  checkOutTime: {
    type: DataTypes.TIME,
    allowNull: true
  },
  numOfAdults: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  numOfKids: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  numOfRooms: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  voucher: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
}, {
  tableName: 'hotel', // Specify the table name
  timestamps: false, // Disable timestamps
  // Other options such as freezeTableName, underscored, etc. can be added here
});
Hotel.belongsTo(Query, { foreignKey: 'queryId', as: 'query' });

// Export the Destination model
module.exports = Hotel;
