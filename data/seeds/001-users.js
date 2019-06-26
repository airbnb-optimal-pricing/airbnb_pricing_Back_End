bcrypt = require('bcryptjs');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'chris', password: bcrypt.hashSync('chris', 10)},
        { username: 'test', password: bcrypt.hashSync('pass', 10) }
      ]);
    });
};
