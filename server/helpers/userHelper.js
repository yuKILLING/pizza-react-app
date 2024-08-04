const db = require("../db");

async function useCheck(login) {
  try {
    const user = await db.query(
      "SELECT * FROM users WHERE login = $1",
      [login]
    );
    if (user.rowCount === 0) {
      return { message: "Account is not in use" };
    }

    return { message: "Account in use", user: user.rows[0] };
  } catch (error) {
    console.error(error);
    return { message: "Internal server error" };
  }
}

async function addUser(login, hashedPassword) {
  try {
    const result = await db.query(
      "INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *",
      [login, hashedPassword]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { useCheck, addUser }