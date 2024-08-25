import CartItem from "./CartItem";
export default function CartList({ pizzas }) {
  return (
    <div className="flex flex-col gap-2">
      {pizzas.map((pizza) => (
        <CartItem key={pizza.pizza_id} pizza={pizza} />
      ))}
    </div>
  );
}
