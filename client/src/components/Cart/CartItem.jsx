export default function CartItem({ pizza }) {
  return (
    <div className="flex gap-2 mx-3 border rounded-xl p-2 relative">
      <div>
        <img src={pizza.pizza_img} alt="Pizza image" className="w-16" />
      </div>
      <div className="flex flex-col justify-between py-2">
        <span className="text-lg font-bold">{pizza.pizza_name}</span>
        <span>{pizza.pizza_price} ₽</span>
      </div>
      <img src="/icons/trash.svg" alt="Delete" className="absolute w-4 right-5 top-5 opacity-50 hover:-translate-y-1 transition"/>
    </div>
  );
}
