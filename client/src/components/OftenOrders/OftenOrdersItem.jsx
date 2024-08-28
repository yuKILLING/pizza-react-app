// That's Often-Orders-Item component, which is included in Often-Order-List component
import { useState } from "react";
import { useCart } from "../../react-context/cartContext";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

export default function OftenOrdersItem({ bestSeller }) {
  const { addToCart, favorites, setFavorites } = useCart();
  const [modal, setModal] = useState(false);
  // Modal window hanlders
  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      {/* For Modal window */}
      <Modal open={modal}>
        <div className="flex h-full">
          {/* Left-bar, pizza's image */}
          <div className="flex flex-1 justify-center items-center relative p-8">
            {/* Pizza's image */}
            <img src={bestSeller.pizza_img} alt="Pizza" className="w-[300px]" />

            {/* Pizza status */}
            {bestSeller.pizza_status && (
              <span
                className={`absolute top-8 right-5 px-4 py-1 rounded-2xl font-semibold text-xl ${
                  bestSeller.pizza_status === "bestseller"
                    ? "bg-secondaryOrange text-white"
                    : bestSeller.pizza_status === "profit"
                    ? "bg-primaryYellow text-black"
                    : ""
                }`}
              >
                {bestSeller.pizza_status === "bestseller" ? "Хит" : "Выгодно"}
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
              {bestSeller.pizza_name}
            </p>
            {/* Pizza's grams */}
            <span className="text-primaryGray opacity-80 text-sm">
              {bestSeller.pizza_grams} г
            </span>
            {/* Pizza's description */}
            <p className="text-sm mt-3 flex-1">
              {bestSeller.pizza_description}
            </p>
            {/* Button */}
            <Button className="mt-auto" onClick={() => addToCart(bestSeller)}>
              Добавить в корзину за {bestSeller.pizza_price} ₽
            </Button>
          </div>
        </div>
      </Modal>

      {/* Component */}
      <div
        onClick={openModal}
        className="w-64 h-24 shadow-md rounded-lg flex items-center px-2 gap-2 cursor-pointer overflow-hidden transition duration-300 hover:shadow-sm"
      >
        {/* Image of order */}
        <img src={bestSeller.pizza_img} alt="Food" className="w-20" />

        {/* Order's name and price */}
        <div className="flex flex-col font-semibold gap-1">
          <span className="leading-4 font-bold">{bestSeller.pizza_name}</span>
          <span>{bestSeller.pizza_price} ₽</span>
        </div>
      </div>
    </>
  );
}
