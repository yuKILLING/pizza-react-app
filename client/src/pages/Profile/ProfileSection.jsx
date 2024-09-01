import { useState } from "react";
import SecondModal from "../../components/Modal/SecondModal";
import Input from "../../components/UserInput/Input";
import SecondButton from "../../components/Button/SecondButton";

// Profile section component
export default function ProfileSection() {
  const [modal, setModal] = useState(true);
  const [year, setYear] = useState("");
  const yearsChanged = (e) => {
    const value = e.target.value;
    if (value.length === 2) {
      setYear(value + '/');
    } else {
      setYear(value);
    }
  };
  return (
    <section className="w-3/6 m-auto flex flex-col border mt-14">
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
            <h2 className="text-3xl">Jhon Doe</h2>
            <span className="text-primaryBlue">
              asldhja@mail.ru <span className="text-black">- Пользователь</span>
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
            <span>Пароль</span>
            <span>День рождения</span>
          </div>
          <div className="flex flex-col gap-8">
            <Input className="w-96" />
            <Input type="email" className="w-96" />
            <Input type="password" className="w-96" />
            <span>11.01.51</span>
          </div>
        </div>
      </div>

      {/* Credit cart data */}
      <div>
        <div className="p-5">
          <h3 className="text-2xl">Способы оплаты</h3>

          {/* Credit card Modal*/}
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
