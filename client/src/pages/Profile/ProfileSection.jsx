import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../stores/store";
import SecondModal from "../../components/Modal/SecondModal";
import Input from "../../components/UserInput/Input";
import SecondButton from "../../components/Button/SecondButton";

export default function ProfileSection() {
  const { isAuth, user, changeBearer, changeAuth, changeUser } = useUser();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(user.email)
  const [userBirthdate, setUserBirthdate] = useState(user.birthDate)
  const [userNickname, setUserNickname] = useState(user.nickname)

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth");
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null;
  }

  const [modal, setModal] = useState(false);
  const [year, setYear] = useState("");
  const yearsChanged = (e) => {
    const value = e.target.value;
    if (value.length === 2) {
      setYear(value + "/");
    } else {
      setYear(value);
    }
  };

  const logOut = async () => {
    changeAuth(false);
    changeBearer("");
    changeUser({});
    navigate("/");
  };

  return (
    <section className="w-3/6 m-auto flex flex-col border mt-14 relative">
      <img
        src="/icons/logout.svg"
        alt="Log out"
        className="absolute cursor-pointer w-6 right-3 top-2 opacity-70 transition hover:translate-x-1 duration-300"
        onClick={logOut}
      />
      {/* Profile and name */}
      <div className="border-b">
        <div className="p-5 flex">
          {/* Profile image */}
          <div className="w-1/4 flex flex-col gap-10 mr-10">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-44 border rounded-full"
            />
            <h1 className="text-2xl">Аккаунт</h1>
          </div>
          {/* Name */}
          <div className="flex flex-col mt-5 gap-3">
            <h2 className="text-3xl">{userNickname}</h2>
            <span className="text-primaryBlue">
              {userEmail} <span className="text-black">- Пользователь</span>
            </span>
          </div>
        </div>
      </div>

      {/* Account data */}  
      <div className="border-b">
        <div className="p-5 py-10 flex">
          <div className="w-1/4 flex flex-col gap-12 text-primaryGray mr-10">
            <span>Никнейм</span>
            <span>Почта</span>
            {/* <span>Пароль</span> */}
            <span>День рождения</span>
          </div>
          <div className="flex flex-col gap-8">
            <Input className="w-96" value={userNickname}/>
            <Input type="email" className="w-96" value={userEmail}/>
            {/* <Input type="password" className="w-96" value={}/> */}
            <span>{userBirthdate}</span>
          </div>
        </div>
      </div>

      {/* Credit card data */}
      <div>
        <div className="p-5">
          <h3 className="text-2xl">Способы оплаты</h3>

          {/* Credit card Modal */}
          <SecondModal open={modal} setModal={setModal}>
            <div className="flex flex-col items-center">
              {/* Credit Card picture */}
              <div className="relative text-white">
                <img src="/card" alt="Card" className="w-96" />
                <span className="absolute top-28 left-14">
                  1234 1234 1234 1234
                </span>
                <span className="absolute left-32 bottom-6">13/44</span>
              </div>

              {/* Credit Card form */}
              <form className="mt-4 space-y-4">
                <div className="flex flex-col">
                  <label className="text-primaryGray">Номер карты</label>
                  <Input className="w-80" />
                </div>
                <div className="flex flex-col">
                  <label className="text-primaryGray">Имя держателя</label>
                  <Input className="w-80" />
                </div>

                <div className="flex gap-2 justify-between">
                  <div className="flex flex-col">
                    <label className="text-primaryGray">MM/YY</label>
                    <Input
                      className="w-36"
                      value={year}
                      onChange={yearsChanged}
                      maxLength={5}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-primaryGray">CVV</label>
                    <Input className="w-36" />
                  </div>
                </div>

                <div className="flex">
                  <SecondButton>Подтвердить</SecondButton>
                </div>
              </form>
            </div>
          </SecondModal>
        </div>
      </div>
    </section>
  );
}
