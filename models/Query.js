const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Destination = require('./city');
const QuerySource = require('./querySource');
const User = require('./userMaster');
//const packagePayment = require('./packagePayment');// Ensure this import is correct

const Query = sequelize.define('query', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  submitName: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  countryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  stateId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  confirmPackage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  cityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(14),
    allowNull: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  destinationId: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    references: {
      model: Destination,
      key: 'id'
    }
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  budgetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  day: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  adult: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  child: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  infant: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  statusId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  statusComment: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  leadSource: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    references: {
      model: QuerySource,
      key: 'id'
    }
  },
  assignTo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: User,
      key: 'id'
    }
  },
  updateDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  visa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  insurance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  addedBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  dateAdded: {
    type: DataTypes.DATE,
    allowNull: false
  },
  leadId: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '0'
  },
  fromCity: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  monthyear: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  sendPaymentPlan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  sendPaymentPlanDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  travelMonth: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  destination_city: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  lockPostSaleSupplier: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  priorityStatus: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  internalnote: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status_updateDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  query_cancel: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  whatshapp_stickyid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  instagramid: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  ad_id: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  ad_name: {
    type: DataTypes.STRING(500),
    allowNull: false
  }
}, {
  tableName: 'querymaster',
  timestamps: false // If you don't have timestamps in your table
});

// Define the association: One Query has many PackagePayments
//Query.hasMany(packagePayment, { foreignKey: 'queryId', as: 'packagePayments' });
Query.belongsTo(Destination, { foreignKey: 'destinationId', as: 'destination' });
Query.belongsTo(QuerySource, { foreignKey: 'leadSource', as: 'querySource' });
Query.belongsTo(User, { foreignKey: 'assignTo', as: 'assignedUser' });

module.exports = Query;
