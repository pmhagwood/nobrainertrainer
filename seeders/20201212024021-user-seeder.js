'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userName: 'MStuart90',
      password: 'password',
      email: 'mmooradian90@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userName: 'mariabyler',
      password: 'password',
      email: 'mariabyler98@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }{
      userName: 'pmhagwood',
      password: 'password',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }{
      userName: 'Rachelmoore2020',
      password: 'password',
      email: 'rachelmoore6822@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }{
      userName: 'duncangw10',
      password: 'password',
      email: 'duncangw1@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }{
      userName: 'DigitalAmnesia',
      password: 'password',
      email: 'mike@digitalamnesia.io',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
  ]);
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