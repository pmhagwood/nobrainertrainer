'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
      await queryInterface.bulkInsert('relax', [{
        name: 'Don not worry about anything. Go out and have a good time.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Being ambivalent does not mean that you are a relevatist, that anything goes; it just means that you show the complexity of life. Life is always complex. --Etgar Keret',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'In a fight almost anything goes. It almost reaches the point where you stop to apologize if a chance blow lands above the belt. --Wayne Gretzky',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Sweat is fat crying.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Nothing will work unless you do. -- Maya Angelou',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'To give anything less than your best is to sacrifice the gift. -- Steve Prefontaine',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Strength does not come from physical capacity. It comes from an indomitable will. -- Mahatma Gandhi',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Strong people are harder to kill than weak people and more useful in general. -- Mark Rippetoe',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'A champion is someone who gets up when they can’t. -- Jack Dempsey',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Anything goes. You always find interesting things that way. -- Beck',
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
