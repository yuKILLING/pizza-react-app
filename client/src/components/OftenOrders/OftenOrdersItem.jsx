// That's Often-Orders-Item component, which is included in Often-Order-List component

export default function OftenOrdersItem({bestSeller}) {
  return (
    <div className="w-64 h-24 shadow-md rounded-lg flex items-center px-2 gap-2 cursor-pointer overflow-hidden transition duration-300 hover:shadow-sm">
        {/* Image of order */}
      <img src="pizzas/first.avif" alt="Food" className="w-20" />

      
      {/* Order's name and price */}
      <div className="flex flex-col font-semibold gap-1">
        <span className="leading-4 font-bold">{bestSeller.pizza_name}</span>
        <span>{bestSeller.pizza_price} ₽</span>
      </div>
    </div>
  );
}
