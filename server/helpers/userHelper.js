const db = require("../db");

async function useCheck(email) {
  try {
    const user = await db.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rowCount === 0) {
      return { message: "Account is not in use" };
    }

    return { message: "Account in use", user: user.rows[0] };
  } catch (error) {
    console.error(error);
    return { message: "Internal server error" };
  }
}

async function addUser(email, hashedPassword, nickname, birthday) {
  try {
    const result = await db.query(
      "INSERT INTO users (user_email, user_password, user_nickname, user_birthday) VALUES ($1, $2, $3, $4) RETURNING *",
      [email, hashedPassword, nickname, birthday]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { useCheck, addUser };
