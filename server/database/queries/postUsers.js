const argon2 = require('argon2')
const dbConnection = require('../config/dbConnection')

const postUser = async ({ userName, password, email }) => {
  try {
    let hashedPassword = await argon2.hash(password)
    const sql = {
      text:'INSERT INTO userInfo(user_name, password, email) VALUES ($1,$2,$3)',
      values:[userName,hashedPassword, email],
    }
    return dbConnection.query(sql.text, sql.values)
  }
  catch (err) {
    const postUserError = new Error('the user has not been added to the database')
    throw postUserError;    
  }
}
module.exports = postUser;
