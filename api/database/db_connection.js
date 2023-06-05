const { Pool } = require('pg');

const options = {
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.SSL
};

module.exports = new Pool(options);