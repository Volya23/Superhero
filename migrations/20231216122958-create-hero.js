'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      realName: {
        field: 'real_name',
        type: Sequelize.STRING,
        allowNull: false
      },
      originDescription: {
        field: 'origin_description',
        type: Sequelize.STRING
      },
      superpower: {
        type: Sequelize.STRING,
        allowNull: false
      },
      catchPhrase: {
        field: 'catch_phrase',
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      gender: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  }
};