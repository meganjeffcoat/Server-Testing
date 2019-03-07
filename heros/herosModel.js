const db = require('../data/dbConfig');

module.exports = {
    find, 
    findById,
    add,
    update,
    remove
}

function find() {
    return db('heros');
}

function findById(id) {
    return db('heros').where({id}).first();
}

function add(course){
    return db('heros').insert(course).into('heros');
}

function update(id, changes) {
    return db('heros').where({id})
    .update(changes)
}

function remove(id) {
    return db('heros').where({id}).del();
}