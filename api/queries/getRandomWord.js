const dbConn = require('../database/db_connection');

module.exports = async (language, category) => {
  try {
    const data = await dbConn.query(`SELECT * FROM words WHERE catagory=($1) ORDER BY RANDOM() LIMIT 1`, [category]);
    return data.rows[0][language];
  } catch (error) {
    console.error(error);
  }
};
