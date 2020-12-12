'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userName: 'MStuart90',
      password: 'password',
      email: 'mmooradian90@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};



// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Users', [{
//       userName: 'MStuart90',
//       password: 'password',
//       email: 'mmooradian90@yahoo.com',
//       createdAt: new Date(),
//       updatedAt: new Date()
//     }]);
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Users', null, {});
//   }
// };