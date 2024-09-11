import { useCart } from "../../react-context/cartContext";
export default function CartItem({ pizza }) {
  const { addToCart, favorites, setFavorites, deleteFromCart } = useCart();

  return (
    <div className="flex gap-2 mx-3 border rounded-xl p-1 relative">
      <div className="self-center">
        <img src={pizza.pizza_img} alt="Pizza image" className="w-12" />
      </div>
      <div className="flex flex-col justify-between py-2">
        <span className="text-base font-bold">{pizza.pizza_name}</span>
        <span className="font-bold">{pizza.pizza_price} ₽</span>
      </div>
      <img
        src="/icons/trash.svg"
        alt="Delete"
        className="absolute w-3 right-5 top-5 opacity-50 hover:-translate-y-1 transition"
        onClick={() => {
          deleteFromCart(pizza);
        }}
      />
    </div>
  );
}
