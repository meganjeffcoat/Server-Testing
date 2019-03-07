const db = require("../data/dbConfig.js");

module.exports = {
  fetch,
  insert,
  remove
};

async function fetch() {
  return db("heros");
}

async function insert(hero) {
  return db("heros").insert(hero);
}

async function remove(id) {
  return db("heros")
    .where("id", id)
    .del();
}