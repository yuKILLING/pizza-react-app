// That's Often-Orders-Item component, which is included in Often-Order-List component
import { useState } from "react";
import { addToCart } from "../../Utils/cartUtils";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

export default function OftenOrdersItem({ bestSeller }) {
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
        <div className="grid grid-cols-2 gap-4 items-center h-full p-4">
          {/* Первый столбец - изображение пиццы */}
          <div className="flex justify-center relative">
            <img src={bestSeller.pizza_img} alt="Pizza" className="w-[300px]" />
            {bestSeller.pizza_status === "bestseller" && (
              <span className="absolute top-0 right-5 px-4 py-1 rounded-2xl bg-secondaryOrange text-white font-semibold text-xl">
                Хит
              </span>
            )}

            {/* Profitable flag, hidden by default. Depending on pizza.status it will be showed*/}
            {bestSeller.pizza_status === "profit" && (
              <span className="absolute top-0 right-5 px-4 py-1 rounded-2xl bg-primaryYellow text-black font-semibold text-xl">
                Выгодно
              </span>
            )}
          </div>

          {/* Второй столбец - информация о пицце */}
          <div className="flex flex-col justify-between p-4 relative h-full">
            {/* Верхняя часть с названием и описанием */}
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="font-bold text-2xl">{bestSeller.pizza_name}</p>
                <img
                  src="/icons/close.svg"
                  alt="Close Icon"
                  onClick={closeModal}
                  className="w-6 h-6 cursor-pointer absolute right-4 top-4 hover:-translate-y-1 transition"
                />
              </div>
              <p className="text-sm mt-3">{bestSeller.pizza_description}</p>
            </div>

            {/* Кнопка добавления в корзину */}
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
