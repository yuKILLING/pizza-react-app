import { useEffect, useState } from "react";
import { useCart } from "../../react-context/cartContext";
import { motion, AnimatePresence } from "framer-motion";
import CartList from "./CartList";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function Cart({ isCartOpen, setIsCartOpen }) {
  const { addToCart, favorites, setFavorites, makeAnOrder } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  // Getting data from local storage
  useEffect(() => {
    const stringPizzas = localStorage.getItem("pizzas");
    try {
      const parsedPizzas = stringPizzas ? JSON.parse(stringPizzas) : [];
      setFavorites(parsedPizzas);
      if (parsedPizzas) {
        const price = favorites.reduce((acc, pizza) => {
          return acc + pizza.pizza_price;
        }, 0);
        const computedTax = Math.round(price * 0.05 * 100) / 100;
        setTax(computedTax);
        setTotalPrice(price + computedTax);
      }
    } catch (error) {
      console.error("Error parsing pizzas from localStorage", error);
      setFavorites([]);
    }
  }, []);
  // Watching for the price
  useEffect(() => {
    try {
      const price = favorites.reduce((acc, pizza) => {
        return acc + pizza.pizza_price;
      }, 0);
      const computedTax = Math.round(price * 0.05 * 100) / 100;
      setTax(computedTax);
      setTotalPrice(price + computedTax);
    } catch (error) {
      console.error(error);
    }
  }, [favorites]);
  
  // Scroll-bar fix
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (isCartOpen) {
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
  }, [isCartOpen]);

  return (
    <>
      <AnimatePresence initial={false} wait={true}>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="h-screen w-screen fixed z-50 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-end items-center"
          >
            <div className="bg-notWhite w-96 h-screen flex flex-col py-5">
              <div className="flex items-center gap-5 pl-6">
                <img
                  src="/icons/close.svg"
                  alt="Close Icon"
                  className="w-6 cursor-pointer hover:rotate-90 transition duration-300"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                />
                <h6 className="font-bold text-2xl">Корзина</h6>
              </div>

              {/* If cart is not empty */}
              {favorites.length > 0 && (
                <>
                  <div className="flex-grow mt-5">
                    <CartList pizzas={favorites} />
                  </div>

                  <div className="flex flex-col mb-4 mx-4">
                    <div className="flex">
                      <span>Налог 5%:</span>
                      <div className="border-b border-dashed flex-1"></div>
                      <b className="text-green-800">{tax} ₽</b>
                    </div>
                    <div className="flex">
                      <span>Итого:</span>
                      <div className="border-b border-dashed flex-1"></div>
                      <b className="text-green-800">{totalPrice} ₽</b>
                    </div>
                  </div>

                  <div className="mx-2 flex flex-col">
                    <Button className="h-10" onClick={()=>{makeAnOrder()}}>Оформить заказ</Button>
                  </div>
                </>
              )}
              {/* If cart is emprty */}
              {favorites.length <= 0 && (
                <div className="flex-grow mt-5 flex flex-col justify-center items-center gap-5">
                  <img src="empty.svg" alt="Empty" />
                  <h1 className="font-bold text-2xl">Ой, пусто!</h1>
                  <p className="break-word max-w-52 text-center leading-5">
                    Добавьте что-то в корзину, чтобы сделать заказ.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
