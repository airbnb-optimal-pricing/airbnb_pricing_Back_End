const db = require ('../db.Config');

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
    return db('users').select('id', 'username');
}

function findBy(filter) {
    return db('users').where(filter);
};
function add(user) {
    return db('users')
    .insert(user, 'id');
}
function findById(id) {
    return db('users')
    .where({id})
    .first();
};

async function findPropertiesByUserId(id) {
    const properties = await db('properties').where({user_id: id});
    console.log(properties)
    return properties;
}
function remove(id) {
    return db('users')
    .where({id})
    .first()
    .delete();
};

function update(user, id) {
    return db('users')
    .where({id})
    .update(user);
}
