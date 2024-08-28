import { useState } from "react";
import { useCart } from "../../react-context/cartContext";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

// That's Menu-Item component, which is included in Menu-List component

export default function MenuItem({ pizza }) {
  const { addToCart, favorites, setFavorites } = useCart();
  const [modal, setModal] = useState(false);

  // Modal window hanlders
  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  // Menu Item
  return (
    <>
      {/* Modal window */}
      <Modal open={modal}>
        <div className="flex h-full">
          {/* Left-bar, pizza's image */}
          <div className="flex flex-1 justify-center items-center relative p-8">
            {/* Pizza's image */}
            <img src={pizza.pizza_img} alt="Pizza" className="w-[300px]" />

            {/* Pizza status */}
            {pizza.pizza_status && (
              <span
                className={`absolute top-8 right-5 px-4 py-1 rounded-2xl font-semibold text-xl ${
                  pizza.pizza_status === "bestseller"
                    ? "bg-secondaryOrange text-white"
                    : pizza.pizza_status === "profit"
                    ? "bg-primaryYellow text-black"
                    : ""
                }`}
              >
                {pizza.pizza_status === "bestseller" ? "Хит" : "Выгодно"}
              </span>
            )}
          </div>

          {/* Right-bar, pizza info */}
          <div className="flex flex-1 flex-col p-8 relative bg-notWhite">
            {/* Upper part */}
            <img
              src="/icons/close.svg"
              alt="Close Icon"
              onClick={closeModal}
              className="w-6 h-6 cursor-pointer absolute right-4 top-6 hover:-translate-y-1 transition"
            />
            {/* Pizza's name */}
            <p className="font-bold text-xl pr-5 break-words">
              {pizza.pizza_name}
            </p>
            {/* Pizza's grams */}
            <span className="text-primaryGray opacity-80 text-sm">
              {pizza.pizza_grams} г
            </span>
            {/* Pizza's description */}
            <p className="text-sm mt-3 flex-1">{pizza.pizza_description}</p>
            {/* Button */}
            <Button className="mt-auto" onClick={() => addToCart(pizza)}>
              Добавить в корзину за {pizza.pizza_price} ₽
            </Button>
          </div>
        </div>
      </Modal>

      <div className="flex flex-col w-[300px] cursor-pointer relative">
        {/* Pizza Image */}
        <img
          src={pizza.pizza_img}
          alt="Pizza"
          className="w-64 self-center transition hover:-translate-y-2"
          onClick={() => openModal()}
        />

        {/* BestSeller flag, hidden by default. Depending on pizza.status it will be showed */}
        {pizza.pizza_status === "bestseller" && (
          <span className="absolute top-0 right-5 px-4 py-1 rounded-2xl bg-secondaryOrange text-white font-semibold text-xl">
            Хит
          </span>
        )}

        {/* Profitable flag, hidden by default. Depending on pizza.status it will be showed*/}
        {pizza.pizza_status === "profit" && (
          <span className="absolute top-0 right-5 px-4 py-1 rounded-2xl bg-primaryYellow text-black font-semibold text-xl">
            Выгодно
          </span>
        )}

        {/* Pizza's name and description */}
        <h1 className="my-1 self-start text-xl font-bold">
          {pizza.pizza_name}
        </h1>
        <p className="h-[80px] text-sm opacity-80 overflow-hidden text-ellipsis">
          {pizza.pizza_description}
        </p>

        {/* Price */}
        <div className="flex justify-between items-center mt-3 px-1">
          <span className="text-2xl font-bold">{pizza.pizza_price} ₽</span>
          <Button onClick={() => addToCart(pizza)}>В корзину</Button>
        </div>
      </div>
    </>
  );
}
