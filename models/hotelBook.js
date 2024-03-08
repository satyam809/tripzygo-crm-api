const { DataTypes } = require('sequelize');

const HotelBook = sequelize.define('HotelBooking', {
 id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
 },
 queryId: {
    type: DataTypes.INTEGER(11),
    allowNull: true
 },
 name: {
    type: DataTypes.STRING(255),
    allowNull: true
 },
 destination_id: {
    type: DataTypes.INTEGER(11),
    allowNull: true
 },
 type: {
    type: DataTypes.STRING(255),
    allowNull: true
 },
 category: {
    type: DataTypes.STRING(255),
    allowNull: true
 },
 room_name: {
    type: DataTypes.STRING(255),
    allowNull: true
 },
 meal: {
    type: DataTypes.STRING(255),
    allowNull: true
 },
 checkinDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
 },
 checkoutDate: {
    type: DataTypes.DATEONLY,
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
    type: DataTypes.INTEGER(11),
    allowNull: true
 },
 numOfKids: {
    type: DataTypes.INTEGER(11),
    allowNull: true
 },
 numOfRooms: {
    type: DataTypes.INTEGER(11),
    allowNull: true
 },
 voucher: {
    type: DataTypes.STRING(255),
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
    defaultValue: Sequelize.NOW,
    onUpdate: Sequelize.NOW
 }
}, {
   
      tableName: 'hotelbook', // Specify the table name if it's different
      timestamps: false // If you don't have timestamps in your table
  
});
module.exports = HotelBook;
