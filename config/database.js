// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crm', 'root', '', {
    port: 3308,
    host: 'localhost',
    dialect: 'mysql', // or any other dialect
    timezone: '+05:30'
});
// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
