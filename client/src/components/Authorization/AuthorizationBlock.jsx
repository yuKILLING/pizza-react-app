import { useState } from "react";
import { useUser } from "../../stores/store";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import SecondButton from "../Button/SecondButton";
import Input from "../UserInput/Input";

// Success Toast
const successToast = () =>
  toast.success("Аккаунт успешно создан", {
    style: {
      border: "1px solid green",
      fontWeight: "bold",
      fontSize: "15px",
    },
  });

const errorValidToast = () =>
  toast.error("Поля не должны быть пустыми!", {
    style: {
      border: "2px solid red",
      fontWeight: "bold",
      fontSize: "15px",
    },
  });

export default function AuthorizationSection() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [registrationNickname, setRegistrationNickname] = useState("");
  const [registrationBirthday, setRegistrationBirthday] = useState("");
  const { changeAuth } = useUser();
  const { changeBearer } = useUser();
  const { changeUser } = useUser();

  // Login Function
  const logIn = async (e) => {
    try {
      if (!loginEmail || !loginPassword) {
        return errorValidToast();
      }
      const response = await axios.post(
        `http://localhost:5000/user/login?email=${loginEmail}&password=${loginPassword}`
      );
      if (response.data.isVerify === true) {
        changeBearer(response.data.token);
        changeAuth(true);
        changeUser(response.data.userData);
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
      return toast.error("Неверный логин или пароль", {
        style: {
          border: "2px solid red",
          fontWeight: "bold",
          fontSize: "15px",
        },
      });
    }
  };

  // Registration Function
  const registration = async (e) => {
    try {
      if (
        !registrationEmail ||
        !registrationPassword ||
        !registrationNickname ||
        !registrationBirthday
      ) {
        return errorValidToast();
      }
      const response = await axios.post(
        `http://localhost:5000/user/createuser?email=${registrationEmail}&password=${registrationPassword}&nickname=${registrationNickname}&birthday=${registrationBirthday}`
      );
      console.log(response);
      if (response.data.message === "User added successfully") {
        setTab("login");
        return successToast();
      }
    } catch (error) {
      console.error(error);
      if (error.response.data === "Email already exists") {
        return toast.error("Почта уже существует", {
          style: {
            border: "2px solid red",
            fontWeight: "bold",
            fontSize: "15px",
          },
        });
      }
    }
  };

  return (
    <>
      {/* Login Block */}
      {tab === "login" && (
        <div className="flex flex-col justify-center">
          <span className="text-6xl self-center">👋</span>
          <h1 className="font-bold self-center mt-5 text-3xl">
            Добро пожаловать!
          </h1>
          <span className="self-center opacity-70">Давайте кушать вкусно</span>
          <div className="mt-12 space-y-5">
            <div className="flex flex-col gap-2">
              <label>Почта</label>
              <Input
                className="w-96"
                maxLength="40"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Пароль</label>
              <Input
                className="w-96"
                type="password"
                maxLength="40"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <SecondButton onClick={logIn}>Войти</SecondButton>
          </div>
          <span className="mt-5">
            Нет аккаунта?{" "}
            <span
              className="cursor-pointer text-primaryOrange"
              onClick={() => setTab("registration")}
            >
              Зарегестрируйтесь
            </span>
          </span>
        </div>
      )}

      {/* Registration block */}
      {tab === "registration" && (
        <div className="flex flex-col justify-center">
          <span className="text-6xl self-center">👋</span>
          <h1 className="font-bold self-center mt-5 text-3xl">
            Добро пожаловать!
          </h1>
          <span className="self-center opacity-70">Давайте кушать вкусно</span>
          <div className="mt-12 space-y-5">
            <div className="flex flex-col gap-2">
              <label>Почта</label>
              <Input
                className="w-96"
                maxLength="30"
                type="email"
                value={registrationEmail}
                onChange={(e) => {
                  setRegistrationEmail(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Прозвище</label>
              <Input
                className="w-96"
                maxLength="15"
                type="text"
                value={registrationNickname}
                onChange={(e) => {
                  setRegistrationNickname(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Дата рождения</label>
              <input
                type="date"
                className="outline-none border bg-black bg-opacity-5 h-10 px-2"
                value={registrationBirthday}
                onChange={(e) => {
                  setRegistrationBirthday(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Пароль</label>
              <Input
                className="w-96"
                type="password"
                maxLength="30"
                value={registrationPassword}
                onChange={(e) => {
                  setRegistrationPassword(e.target.value);
                }}
              />
            </div>

            <SecondButton onClick={registration}>
              Зарегестрироваться
            </SecondButton>
          </div>
          <span className="mt-5">
            Есть аккаунт?{" "}
            <span
              className="cursor-pointer text-primaryOrange"
              onClick={() => setTab("login")}
            >
              Войти
            </span>
          </span>
        </div>
      )}
    </>
  );
}
