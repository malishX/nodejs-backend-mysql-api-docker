const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../dbconnection')

class Member extends Model { }

Member.init({
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Member',
  tableName: 'members',
  underscored: true,
  timestamps: true,
});

module.exports = Member