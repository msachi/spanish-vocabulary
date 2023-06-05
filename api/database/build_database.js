const fs = require("fs");
const fastcsv = require("fast-csv");
require('dotenv').config();

const pool = require('./db_connection');

const buildDatabase = async () => {
  const buildSql = fs.readFileSync(`${__dirname}/build_database.sql`).toString();

  try {
    await pool.query(buildSql);
  } catch (err) {
    throw err;
  }

  const stream = fs.createReadStream(`${__dirname}/dictionary.csv`);
  const csvData = [];
  const csvStream = fastcsv
    .parse()
    .on('data', data => csvData.push(data))
    .on('end', async () => {
      // remove the first line: header
      csvData.shift();

      const client = await pool.connect();
      const insertQuery = "INSERT INTO words (english, spanish, category) VALUES ($1, $2, $3)";
  
      try {    
        csvData.forEach(row => {
          client.query(insertQuery, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log(`inserted ${res.rowCount} row:`, row);
            }
          });
        });
      } finally {
        client.release();
      };
    });

  stream.pipe(csvStream);
}

buildDatabase();

