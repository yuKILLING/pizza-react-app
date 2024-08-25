import { useState } from "react";
import { addToCart } from "../../Utils/cartUtils";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

// That's Menu-Item component, which is included in Menu-List component

export default function MenuItem({ pizza }) {
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
        <div className="grid grid-cols-2 gap-4 items-center h-full p-4">
          {/* Первый столбец - изображение пиццы */}
          <div className="flex justify-center relative border p-4 rounded-2xl">
            <img src={pizza.pizza_img} alt="Pizza" className="w-[300px]" />
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
          </div>

          {/* Второй столбец - информация о пицце */}
          <div className="flex flex-col justify-between p-4 relative h-full">
            {/* Верхняя часть с названием и описанием */}
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="font-bold text-2xl">{pizza.pizza_name}</p>
                <img
                  src="/icons/close.svg"
                  alt="Close Icon"
                  onClick={closeModal}
                  className="w-6 h-6 cursor-pointer absolute right-4 top-4 hover:-translate-y-1 transition"
                />
              </div>
              <p className="text-sm mt-3">{pizza.pizza_description}</p>
            </div>

            {/* Кнопка добавления в корзину */}
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
