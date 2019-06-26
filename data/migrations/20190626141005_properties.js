
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties', prop => {
      prop.increments();
      prop
      .integer('zipcode')
      .notNullable();
      prop
      .string('property_type', 255)
      .notNullable();
      prop
      .string('room_type')
      .notNullable();
      prop
     .integer('accommodates')
      .notNullable();
      prop
      .decimal('bathrooms', 2, 1)
      .notNullable();
      prop
      .integer('bedrooms')
      .notNullable();
      prop
      .integer('beds')
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
