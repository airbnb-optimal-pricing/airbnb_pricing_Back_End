
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('simple').del()
    .then(function () {
      // Inserts seed entries
      return knex('simple').insert([
        {id: 1, "zipcode": "90257", "bedrooms": 5, "bathrooms": 3},
        { id: 1, "zipcode": "90267", "bedrooms": 1, "bathrooms": 1 },
        { id: 1, "zipcode": "90258", "bedrooms": 4, "bathrooms": 1 }
      ]);
    });
};
