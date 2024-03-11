const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Query = require('./query'); // Import the Query model
const PackageBuilder = require('./packageBuilder');
const packagePayment = sequelize.define('packagePayment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  paymentId: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  queryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: Query,
      key: 'id'
    }
  },
  packageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: PackageBuilder,
      key: 'id'
    }
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  paymentStatus: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  paymentBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  transectionType: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: 'Online'
  },
  paymentLinkDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  paymentWithoutLinkDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  conFee: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  payment_verified: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  receiptFile: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  remark: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  permission_status: {
    type: DataTypes.ENUM('accepted', 'declined', 'pending', 'idle'),
    allowNull: false,
    defaultValue: 'idle'
  }
}, {
  tableName: 'sys_PackagePayment',
  timestamps: false
});

// Define the association: Each PackagePayment belongs to one Query
packagePayment.belongsTo(Query, { foreignKey: 'queryId', as: 'query' });
packagePayment.belongsTo(PackageBuilder, { foreignKey: 'packageId', as: 'packageBuilder' });


module.exports = packagePayment;
