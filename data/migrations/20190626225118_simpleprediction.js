
exports.up = function(knex, Promise) {
    return knex.schema.createTable('simple', prop => {
        prop.increments();
        prop
            .string('zipcode')
            .notNullable();
        prop
            .float('bathrooms', 2, 1)
            .notNullable();
        prop
            .float('bedrooms')
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('simple')
};
