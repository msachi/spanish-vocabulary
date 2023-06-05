const dbConn = require('../database/db_connection');

module.exports = async (language, word) => {
  try {
    const data = (language === 'english')
      ? await dbConn.query(`SELECT * FROM words WHERE english=($1)`, [word])
      : await dbConn.query(`SELECT * FROM words WHERE spanish=($1)`, [word]);
    return data.rows[0];
  } catch (error) {
    console.error(error);
  }
};
