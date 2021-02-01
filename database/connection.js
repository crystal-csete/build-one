require("dotenv").config();

const knex = require("knex")("production");

const knexfile = require("../knexfile.js");
const environment = process.env.NODE_ENV || "production";

module.exports = knex(knexfile[environment]);
