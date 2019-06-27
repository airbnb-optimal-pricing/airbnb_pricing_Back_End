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
    return db('simple').select('id', 'username');
}

function findBy(filter) {
    return db('simple').where(filter);
};
function add(property) {
    return db('simple')
        .insert(property, 'id');
}
function findById(id) {
    return db('simple')
        .where({ id })
        .first();
};

async function findPropertiesByUserId(id) {
    const properties = await db('simple').where({ user_id: id });
    console.log(properties)
    return properties;
}
function remove(id) {
    return db('simple')
        .where({ id })
        .first()
        .delete();
};

function update(property, id) {
    return db('simple')
        .where({ id })
        .update(property);
}
