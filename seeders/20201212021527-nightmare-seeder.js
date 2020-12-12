'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
      await queryInterface.bulkInsert('nightmare', [{
        name: 'The more you sweat in training, the less you bleed in combat. --Navy SEAL’s',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'The pain of discipline is nothing like the pain of disappointment --Justin Langer',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Shut up and train',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'I don’t care what you USED to bench. --Serge Ceralde',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'The fight is won or lost far away from witnesses, behind the lines, in the gym, and out there on the road, long before I dance under those lights. --Muhammad Ali',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'When you come to the end of your rope, tie a knot and hang on. -- Franklin D. Roosevelt',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Not everyone is capable of madness; and of those lucky enough to be capable, not many have the courage for it.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Pain is weakness leaving the body',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Go Hard, or Go Home',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Take care of your body. It’s the only place you have to live. --Jim Rohn',
        createdAt: new date(),
        updatedAt: new Date()
      
      },

      
    ], 
      
      {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
