
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heros')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('heros').insert([
        {name: 'Hercles', type_of_hero: 'greek'},
        {name: 'Thor', type_of_hero: 'norse'},
        {name: 'Deadpool', type_of_hero: 'I am not a hero'},
      ]);
    });
};
