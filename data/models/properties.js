const db = require('../db.Config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update,
    findPropertiesByUserId
};

function find() {
    return db('properties').select('id');
}

function findBy(filter) {
    return db('properties').where(filter);
};
function add(property) {
    return db('properties')
        .insert(property, 'id');
}
function findById(id) {
    return db('properties')
        .where({ id })
        .first();
};

async function findPropertiesByUserId(id) {
    const properties = await db('properties').where({ user_id: id });
    console.log(properties)
    return properties;
}
function remove(id) {
    return db('properties')
        .where({ id })
        .first()
        .delete();
};

function update(property, id) {
    return db('properties')
        .where({ id })
        .update(property);
}
