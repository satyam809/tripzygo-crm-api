// querySource.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const QuerySource = sequelize.define('querySource', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true
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
    defaultValue: 1
  }
}, {
  tableName: 'querySourceMaster',
  timestamps: false // Assuming you don't have timestamp fields
});

// Associations, if any
// Add associations here if this table has any relationships with other tables

module.exports = QuerySource;
