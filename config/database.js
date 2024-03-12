// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('new_crm', 'root', '', {
    port: 3308,
    host: 'localhost',
    dialect: 'mysql', // or any other dialect
    timezone: '+05:30'
});
// const sequelize = new Sequelize('tripzfp3_app_crm_db', 'tripzfp3_app_crm_db', '@Tripzygo@2023#', {
//     //port: 3308,
//     host: '103.211.218.27',
//     dialect: 'mysql', // or any other dialect
//     timezone: '+05:30'
// });
// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
