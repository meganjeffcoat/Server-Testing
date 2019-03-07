
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heros')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('heros').insert([
        { name: 'Achilles'},
        { name: 'Heracles'},
        { name: 'Odysseus'},
        { name: 'Perseus' }
      ]);
    });
};
