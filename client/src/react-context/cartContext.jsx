// This is a context, that will help us handle cart.
import React, { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// Toast handlers


// Creating context
const CartContext = createContext();

// Creating provider of context
export const CartProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => {
    let currentCart = JSON.parse(localStorage.getItem("pizzas")) || [];
    if (currentCart.length > 6) {
      return errorToast();
    }
    let maxValue = currentCart.length > 0 ? currentCart.at(-1).pizza_id : 0;
    let updatedCart = [...currentCart, { ...item, pizza_id: maxValue + 1 }];
    localStorage.setItem("pizzas", JSON.stringify(updatedCart));
    setFavorites(updatedCart);
    return successToast();
  };

  const deleteFromCart = (pizza) => {
    let currentCart = JSON.parse(localStorage.getItem("pizzas")) || [];
    let updatedCart = currentCart.filter(
      (item) => item.pizza_id !== pizza.pizza_id
    );
    localStorage.setItem("pizzas", JSON.stringify(updatedCart));
    setFavorites(updatedCart);
    return deleteSuccessToast();
  };

  const makeAnOrder = () => {
    setFavorites([]);
    localStorage.clear();
    return makeAnOrderToast();
  };

  return (
    <CartContext.Provider
      value={{
        favorites,
        setFavorites,
        addToCart,
        deleteFromCart,
        makeAnOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Creating hook to use provider
export const useCart = () => useContext(CartContext);
