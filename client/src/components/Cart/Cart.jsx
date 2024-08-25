// Cart component
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartList from "./CartList";
import Button from "../Button/Button";

export default function Cart({ children, open, setCart }) {
  // Getting data from LocalStorage
  const [pizzas, setPizzas] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  useEffect(() => {
    const stringPizzas = localStorage.getItem("pizzas");
    try {
      const parsedPizzas = stringPizzas ? JSON.parse(stringPizzas) : [];
      setPizzas(parsedPizzas);
      // Getting total price using reduce
      if (parsedPizzas) {
        const price = parsedPizzas.reduce((acc, pizza) => {
          return acc + pizza.pizza_price
        }, 0);
        setTax(price*0.05)
        setTotalPrice(price+tax)
      }
    } catch (error) {
      console.error("Error parsing pizzas from localStorage", error);
      setPizzas([]);
    }
  }, []);

  // Scroll Bar handling
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (open) {
      document.body.classList.add("overflow-y-hidden");
      document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.style.marginRight = "";
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
      document.body.style.marginRight = "";
    };
  }, [open]);

  return (
    <>
      <AnimatePresence initial={false} wait={true}>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="h-screen w-screen fixed z-50 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-end items-center"
          >
            <div className="bg-notWhite w-96 h-screen flex flex-col py-5">
              {/* Title and go back icon */}
              <div className="flex items-center gap-5 pl-6">
                <img
                  src="/icons/close.svg"
                  alt="Close Icon"
                  className="w-6 cursor-pointer hover:rotate-90 transition duration-300"
                  onClick={() => setCart(!open)}
                />
                <h6 className="font-bold text-2xl">Корзина</h6>
              </div>

              {/* Cart Item List */}
              <div className="flex-grow mt-5">
                <CartList pizzas={pizzas} />
              </div>

              {/* Amount */}
              <div className="flex flex-col mb-4 mx-2">
                <div className="flex">
                  <span>Налог 5%:</span>
                  <div className="border-b border-dashed flex-1"></div>
                  <b>{tax} ₽</b>
                </div>
                <div className="flex">
                  <span>Итого:</span>
                  <div className="border-b border-dashed flex-1"></div>
                  <b>{totalPrice} ₽</b>
                </div>
              </div>

              {/* Button */}
              <div className="mx-2 flex flex-col">
                <Button className="h-10">Оформить заказ</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
