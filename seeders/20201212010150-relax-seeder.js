'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
      await queryInterface.bulkInsert('relax', [{
        name: 'Difficult roads often lead to beautiful destinations. The best is yet to come.-- Zig Ziglar',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Trust yourself. You have survived a lot, and you will survive whatever is coming. -- Robert Tew',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Act the way that you want to feel. -- Gretchen Rubin',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'I promise you nothing is as chaotic as it seems. Nothing is worth diminishing your health. Nothing is worth poisoning yourself into stress, anxiety, and fear. -- Steve Maraboli',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'There is more to life than increasing its speed. -- Mahatma Gandhi',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Your mind will answer most questions if you learn to relax and wait for the answer. -- William Burroughs',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Tension is who you think you should be. Relaxation is who you are. -- Chinese Proverb',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Keep walking through the storm. Your rainbow is waiting on the other side. -- Heather Stillufsen',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'Our anxiety does not come from thinking about the future, but from wanting to control it. -- Kahlil Gibran',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        name: 'It is not stress that kills us, it is our reaction to it. -- Hans Selye',
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
