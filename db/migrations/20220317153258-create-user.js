'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(30)
      },
      last_name: {
        type: Sequelize.STRING(30)
      },
      email: {
        type: Sequelize.STRING(30)
      },
      mobile: {
        type: Sequelize.STRING(15)
      },
      password: {
        type: Sequelize.STRING(60)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};