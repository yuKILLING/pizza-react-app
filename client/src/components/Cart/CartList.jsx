// Cart list with animation
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CartItem from "./CartItem";

export default function CartList({ pizzas }) {
  const [parent] = useAutoAnimate(null);
  return (
    <div className="flex flex-col gap-2" ref={parent}>
      {pizzas.map((pizza) => (
        <CartItem key={pizza.pizza_id} pizza={pizza} />
      ))}
    </div>
  );
}
