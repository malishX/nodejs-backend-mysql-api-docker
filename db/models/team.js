const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../dbconnection')

class Team extends Model { }

Team.init({
  name: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Team',
  tableName: 'teams',
  underscored: true,
  timestamps: true,
});

module.exports = Team