'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable( 'diaperChangingTables', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      locationName: { type: Sequelize.STRING },
      address: { type: Sequelize.TEXT },
      femaleRestroom: { type: Sequelize.BOOLEAN },
      maleRestroom: { type: Sequelize.BOOLEAN },
      unisexRestroom: { type: Sequelize.BOOLEAN },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('diaperChangingTables')
  }
};
