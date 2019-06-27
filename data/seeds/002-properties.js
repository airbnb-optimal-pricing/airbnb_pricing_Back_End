bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {user_id: 1, id:1,  zipcode: "91210", property_type: "Apartment", room_type: "Entire home/apt", accommodates: 5, bathrooms: 5.0, bedrooms: 5.0, beds: 5.0, bed_type: "Real Bed" },
        { user_id: 1, id: 2, zipcode: "91304", property_type: "Apartment", room_type: "Entire home/apt", accommodates: 5, bathrooms: 4.0, bedrooms: 4.0, beds: 4.0, bed_type: "Real Bed" },
        { user_id: 1, id: 3, zipcode: "91304", property_type: "Apartment", room_type: "Entire home/apt", accommodates: 5, bathrooms: 4.0, bedrooms: 4.0, beds: 4.0, bed_type: "Real Bed" }
      ]);
    });
};
