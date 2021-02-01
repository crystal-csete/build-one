const db = require('../../database/connection.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('users as u')
    .join('roles as r', 'u.role', '=', 'r.id')
    .select('u.id', 'u.username', 'r.name as role');
}
// select u.id, u.username, r.name as role, u.password
// from users as u
// join roles as r
// where u.role = r.id
//tbl=== id, username, role, password

function findBy(filter) {
    return db('users as u')
    .join('roles as r', 'u.role', '=', 'r.id')
    .select('u.id', 'u.username', 'r.name as role', 'u.password')
    .where(filter)
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id')
    return findById(id)
}

function findById(id) {
    return db('users as u')
    .join('roles as r', 'u.role', '=', 'r.id')
    .select('u.id', 'u.username', 'r.name as role')
    .where('u.id', id)
    .first()
}
// select u.id, u.username, r.name as role
// from users as u
// join roles as r
// where u.role = r.id;
//tbl=== id, username, role