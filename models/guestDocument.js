// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Update this with your database configuration
const Query = require('./query');
const Guest = require('./guest');

// Define the HotelMaster model
const guestDocument = sequelize.define('sys_guestsDucument', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    documentType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    document: {
        type: DataTypes.STRING,
        allowNull: true
    },
    queryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Query',
            key: 'id'
          },
        allowNull: true
    },
    guestId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Guest',
            key: 'id'
          },
        allowNull: true
    },
    dateAdded: {
        type: DataTypes.STRING,
        allowNull: true
    },
    addedBy: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'sys_guestsDucument', // Specify the table name if it's different
    timestamps: false // If you don't have timestamps in your table
});
guestDocument.belongsTo(Query, { foreignKey: 'queryId', as: 'query' });
guestDocument.belongsTo(Guest, { foreignKey: 'guestId', as: 'guest' });

module.exports = guestDocument;
