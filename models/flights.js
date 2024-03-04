// Import Sequelize and the connection instance
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const Query = require('./query');
const Destination = require('./destination');

// Define the Flight model
const Flight = sequelize.define('flights', {
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
        type: DataTypes.STRING,
        allowNull: true
    },
    number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    from_destination_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Destination',
            key: 'id'
        },
        allowNull: true
    },
    to_destination_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Destination',
            key: 'id'
        },
        allowNull: true
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: true
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: true
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
    tableName: 'flights', // Specify the table name
    timestamps: false, // Disable timestamps
    indexes: [{ fields: ['from_destination_id'] }, { fields: ['to_destination_id'] }] // Add indexes for frequent queries
});

// Correct the associations
Flight.belongsTo(Query, { foreignKey: 'query_id', as: 'query' });
Flight.belongsTo(Destination, { foreignKey: 'from_destination_id', as: 'fromDestination' });
Flight.belongsTo(Destination, { foreignKey: 'to_destination_id', as: 'toDestination' });

// Export the Flight model
module.exports = Flight;
