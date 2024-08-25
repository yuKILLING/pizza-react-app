export default function CartItem({ pizza }) {
  return (
    <div className="flex gap-2 mx-3 border rounded-xl p-2">
      <div>
        <img src={pizza.pizza_img} alt="Pizza image" className="w-16" />
      </div>
      <div className="flex flex-col justify-between py-2">
        <span className="text-lg font-bold">{pizza.pizza_name}</span>
        <span>{pizza.pizza_price} ₽</span>
      </div>
    </div>
  );
}
