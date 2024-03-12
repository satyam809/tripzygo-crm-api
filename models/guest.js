// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Update this with your database configuration
const Query = require('./query');

// Define the HotelMaster model
const Guest = sequelize.define('sys_guests', {
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
        allowNull: false,
        defaultValue: 0
    },
    submitName: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: true
    },
    whatsapp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    verify: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isDrive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    dateAdded: {
        type: DataTypes.DATE,
        allowNull: true
    },
    addedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'sys_guests', // Specify the table name if it's different
    timestamps: false // If you don't have timestamps in your table
});
Guest.belongsTo(Query, { foreignKey: 'queryId', as: 'query' });

module.exports = Guest;
