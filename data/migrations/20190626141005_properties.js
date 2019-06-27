
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties', prop => {
      prop.increments();
      prop
      .string('zipcode')
      .notNullable();
      prop
      .string('property_type', 255)
      .notNullable();
      prop
      .string('room_type')
      .notNullable();
      prop
     .float('accommodates')
      .notNullable();
      prop
      .float('bathrooms', 2, 1)
      .notNullable();
      prop
      .float('bedrooms')
      .notNullable();
      prop
      .float('beds')
      .notNullable();
      prop
      .string('bed_type')
      .notNullable;
      prop
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('properties')
};
