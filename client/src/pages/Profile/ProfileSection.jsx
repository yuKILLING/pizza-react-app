import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../stores/store";
import toast from "react-hot-toast";
import axios from "axios";
import SecondModal from "../../components/Modal/SecondModal";
import Input from "../../components/UserInput/Input";
import SecondButton from "../../components/Button/SecondButton";
import CardList from "../../components/Cards/CardList";

const successAddedToast = () =>
  toast.success("Карта успешно привязана.", {
    style: {
      border: "1px solid green",
      fontWeight: "bold",
      fontSize: "15px",
    },
  });

const successDeletedToast = () =>
  toast.success("Карта успешно удалена.", {
    style: {
      border: "1px solid green",
      fontWeight: "bold",
      fontSize: "15px",
    },
  });

const errorAddedToast = () =>
  toast.success("Не удалось добавить карту", {
    style: {
      border: "1px solid red",
      fontWeight: "bold",
      fontSize: "15px",
    },
  });

export default function ProfileSection() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { isAuth, user, changeBearer, changeAuth, changeUser } = useUser();

  // Profile info with fallback values
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const [userBirthdate, setUserBirthdate] = useState(user?.birthDate || "");
  const [userNickname, setUserNickname] = useState(user?.nickname || "");
  const [loading, setLoading] = useState(false);
  // Card info
  const [cardList, setCardList] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  // User cards fetching
  const fetchUserCards = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/cards/getallusercards?user_id=${user.user_id}`
      );
      setCardList(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cards:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserCards();
  }, [fetchUserCards]);

  // Adding card function
  const addCard = async () => {
    try {
      const cardData = {
        card_number: cardNumber,
        card_owner: cardOwner,
        mm_yy: year,
        cvv: cvv,
        user_id: user.user_id,
      };

      const response = await axios.post(
        "http://localhost:5000/cards/addcard",
        cardData
      );

      if (response.status === 200) {
        fetchUserCards();
        setModal(false);
        return successAddedToast();
      }
    } catch (error) {
      console.error("Ошибка при добавлении карты:", error);
      return errorAddedToast();
    }
  };

  // Deleting card function

  const deleteCard = async (card_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/cards/deletecard?card_id=${card_id}`
      );
      console.log(response);
      if (response.status === 200) {
        fetchUserCards();
        return successDeletedToast();
      }
    } catch (error) {
      console.error("Ошибка при удалении карты:", error);
      return errorAddedToast();
    }
  };

  // Auth checking
  useEffect(() => {
    if (!isAuth) {
      navigate("/auth");
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null;
  }

  // MM/YY handler
  const yearsChanged = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setYear(value);
  };

  // Card number handler
  const cardNumberHandler = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
    setCardNumber(formattedValue);
  };
  // CVV Handler
  const cvvHandler = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCvv(value);
  };

  // Log out function
  const logOut = async () => {
    changeAuth(false);
    changeBearer("");
    changeUser({});
    navigate("/");
  };

  return (
    <section className="w-3/6 m-auto flex flex-col border mt-14 relative">
      {/* Credit card Modal */}
      <SecondModal open={modal} setModal={setModal}>
        <div className="flex flex-col items-center">
          {/* Credit Card picture */}
          <div className="relative text-white">
            <img src="/card" alt="Card" className="w-96" />
            <span className="absolute top-28 left-14 font-bold">
              {cardNumber}
            </span>
            <span className="absolute left-32 bottom-6">{year}</span>
            <span className="absolute left-28 bottom-1 font-black">
              {cardOwner}
            </span>
          </div>

          {/* Credit Card form */}
          <div className="mt-4 space-y-4">
            <div className="flex flex-col">
              <label className="text-primaryGray">Номер карты</label>
              <Input
                className="w-80"
                value={cardNumber}
                onChange={cardNumberHandler}
                maxLength="19"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-primaryGray">Имя держателя</label>
              <Input
                className="w-80"
                value={cardOwner}
                onChange={(e) => {
                  setCardOwner(e.target.value);
                }}
                maxLength="25"
              />
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
                <Input
                  className="w-36"
                  maxLength="3"
                  value={cvv}
                  onChange={cvvHandler}
                />
              </div>
            </div>

            <div className="flex">
              <SecondButton onClick={addCard}>Подтвердить</SecondButton>
            </div>
          </div>
        </div>
      </SecondModal>

      {/* Profile Page */}
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
            <Input
              className="w-96"
              value={userNickname}
              onChange={(e) => {
                setUserNickname(e.target.value);
              }}
            />
            <Input
              type="email"
              className="w-96"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            {/* <Input type="password" className="w-96" value={}/> */}
            <span>{userBirthdate}</span>
          </div>
        </div>
      </div>

      {/* Credit card data */}
      <div>
        <div className="p-5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-2xl">Способы оплаты</h3>
            <img
              src="/icons/add.svg"
              alt="Add"
              className="w-6 hover:rotate-90 transition cursor-pointer"
              onClick={() => {
                setModal(true);
              }}
            />
          </div>
          <CardList
            cardList={cardList}
            loading={loading}
            deleteCard={deleteCard}
          />
        </div>
      </div>
    </section>
  );
}
