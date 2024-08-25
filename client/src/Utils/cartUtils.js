// Functions for cart
import toast, { Toaster } from "react-hot-toast";
const notify = () =>
  toast.error("Вначале удалите что-то из корзины.", {
    style: {
      border: "2px solid red",
      fontWeight: 'bold',
      fontSize: "15px"
    },
  });

export function addToCart(item) {
  let currentCart = JSON.parse(localStorage.getItem("pizzas")) || [];
  if (currentCart.length > 6) {
    return notify();
  }
  let maxValue = currentCart.length > 0 ? currentCart.at(-1).pizza_id : 0;
  let updatedCart = [...currentCart, { ...item, pizza_id: maxValue + 1 }];
  localStorage.setItem("pizzas", JSON.stringify(updatedCart));
}
