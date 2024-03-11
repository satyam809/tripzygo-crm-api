// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Query = require('./query');

// Define the PackageBuilder model
const PackageBuilder = sequelize.define('packageBuilder', {
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
  startDate:{
    type: DataTypes.DATE,
    allowNull: true
  },
  endDate:{
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'sys_packageBuilder', // Specify the table name
  timestamps: false, // Disable timestamps
  // Other options such as freezeTableName, underscored, etc. can be added here
});

// Define the association: PackageBuilder belongs to Query
PackageBuilder.belongsTo(Query, { foreignKey: 'queryId', as: 'query' });

// Export the PackageBuilder model
module.exports = PackageBuilder;
