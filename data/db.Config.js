const knex = require('knex');
//requires config
const knexConfig = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[dbEnv]);

