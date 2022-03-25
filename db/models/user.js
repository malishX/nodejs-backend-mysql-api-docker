const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../dbconnection')

class User extends Model { }

User.init({
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: DataTypes.STRING,
  mobile: DataTypes.STRING,
  mobile: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  underscored: true,
  timestamps: true,
});

module.exports = User