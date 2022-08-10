'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Decks', [
      {
        title: 'Animals',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        title: 'History',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        title: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        title: 'Other',
        createdAt: new Date(),
        updatedAt: new Date()
       },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Decks', null, {});
  }
};
