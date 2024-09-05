const db = require("../db");
const { useCheck, addUser } = require("../helpers/userHelper.js");
const hashHelper = require("../helpers/hashHelper");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

class UserController {
  async createUser(req, res) {
    try {
      const email = req.query.email;
      const password = req.query.password;
      const nickname = req.query.nickname;
      const birthday = req.query.birthday;
      console.log(req.query)
      const user = await useCheck(email);
      if (user.message === "Account in use") {
        res.status(403).send("Email already exists");
        console.log("Email already exists");
        return;
      }
      const hashedPassword = await hashHelper.scryptHash(password);
      const newUser = await addUser(email, hashedPassword, nickname, birthday);
      res.status(201).json({ message: "User added successfully" });
      console.log("User added successfully");
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.error(error);
    }
  }

  async logIn(req, res) {
    try {
      const { email, password } = req.query;
  
      // Проверка существования пользователя по email
      const user = await useCheck(email);
  
      // Если пользователь не найден или не активен
      if (user.message === "Account is not in use") {
        return res.status(403).json({ message: "Неверный логин или пароль" });
      }
  
      // Проверка пароля
      const isVerified = await hashHelper.scryptVerify(
        password,
        user.user.user_password
      );
  
      if (isVerified) {
        // Генерация JWT-токена
        const token = jwt.sign(
          {
            email: email,
            userName: user.user.user_nickname || user.email, // Прозвище или email
          },
          secret,
          {
            expiresIn: "7d",
          }
        );
  
        // Ответ с токеном и данными о пользователе
        res.status(200).json({
          isVerify: true,
          token: token,
          userData: {
            email: user.user.user_email,
            nickname: user.user.user_nickname,
            birthDate: user.user.user_birthday,
          },
        });
      } else {
        // Неверный пароль
        res.status(403).json({ isVerify: false, message: "Неверный логин или пароль" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
  
}

module.exports = new UserController();