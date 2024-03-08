// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Update this with your database configuration

// Define the CountryMaster model
const Country = sequelize.define('countrymaster', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.BIGINT,
        allowNull: false
    },
    modifyDate: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    deletestatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    sortname: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    phonecode: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'countrymaster', // Specify the table name if it's different
    timestamps: false // If you don't have timestamps in your table
});


// Export the CountryMaster model
module.exports = Country;
