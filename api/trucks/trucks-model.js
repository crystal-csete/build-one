const db = require('../../database/connection.js')

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
};

function find() {
  return db('trucks');
}
//select *
//from trucks;
//trucks tbl:
//id, truck_name, description, imageUrl, price_range, customer_rating, avg_customer_rating, location, departure_time


function findById(id) {
  return db('trucks')
    .where({ id })
    .first();
}
//select *
//from trucks;
//trucks tbl:
//id: 1,2,3

async function add(truck) {
  const [id] = await db('trucks').insert(truck);

  return findById(id);
}

function remove(id) {
  return db('trucks')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('trucks')
    .where({ id })
    .update(changes, '*');
}


