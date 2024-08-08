// That's Often-Orders-Item component, which is included in Often-Order-List component
import { useState } from "react";
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
      <Modal open={modal}>
        <div className="grid grid-cols-2 justify-items-center">
          <img src={bestSeller.pizza_img} alt="Pizza" className="w-[400px]" />
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-2xl">{bestSeller.pizza_name}</p>
                <img
                  src="/icons/close.svg"
                  alt="Close Icon"
                  onClick={closeModal}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
              <p className="text-sm mt-3">{bestSeller.pizza_description}</p>
            </div>
            <Button>Добавить в корзину за {bestSeller.pizza_price} ₽</Button>
          </div>
        </div>
      </Modal>

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
