'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
    return queryInterface.addColumn(
      'users',
      'type',
      { 
        id: Sequelize.string
      }
    );
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'users',
        'type',
      );
 
  }
};
