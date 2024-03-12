// Import Sequelize and the connection instance
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Query = require('./query');

const packageBuilderEvent = sequelize.define('SysPackageBuilderEvent', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    hotelType: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    packageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    checkIn: {
        type: DataTypes.DATE,
        allowNull: true
    },
    checkOut: {
        type: DataTypes.DATE,
        allowNull: true
    },
    singleRoom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    doubleRoom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    tripleRoom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    quadRoom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    cwbRoom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    cnbRoom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hotelCategory: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3
    },
    hotelRoom: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mealPlan: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sectionType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    days: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    transferCategory: {
        type: DataTypes.STRING,
        allowNull: true
    },
    vehicle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dateAdded: {
        type: DataTypes.DATE,
        allowNull: true
    },
    addedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    packageDays: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    mealCategory: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    adultCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    childCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    markupPercent: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: '0'
    },
    markupValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    singleRoomCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    doubleRoomCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    tripleRoomCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    quadRoomCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    cwbRoomCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    cnbRoomCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    daySubject: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    dayDetails: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    eventPhoto: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    flightNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    fromDestination: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    toDestination: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    flightDuration: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    destinationName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    supplierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    bookingStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    supplierCancellationDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    supplierAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    paidAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    pendingAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    showTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    confirmationNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    marginAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    lossAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    currencyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    currencyValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    r1selectedCurrency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    r1Currencyrate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    r1XErate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    r1Cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    r2Currencyrate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    r2XErate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    r2Cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    hotelPriceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    sr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dayphoto: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    overall_pricing: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
    markupTotal: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
    international_trip: {
        type: DataTypes.ENUM('true', 'false'),
        allowNull: false,
        defaultValue: 'false',
        comment: 'true if trip is international, false if trip is not international'
    },
    hotelOption: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    tableName: 'sys_packageBuilderEvent',
    timestamps: false,
});
module.exports = packageBuilderEvent;