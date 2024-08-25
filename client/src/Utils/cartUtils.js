// Functions for cart
export function addToCart(item) {
  let currentCart = JSON.parse(localStorage.getItem("pizzas")) || [];
  let maxValue = currentCart.length > 0 ? currentCart.at(-1).pizza_id : 0;
  let updatedCart = [...currentCart, {...item, pizza_id: maxValue+1}];
  localStorage.setItem("pizzas", JSON.stringify(updatedCart));
}
