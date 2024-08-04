// That's Often-Orders-Item component, which is included in Often-Order-List component

export default function OftenOrdersItem() {
  return (
    <div className="w-64 h-24 shadow-md rounded-lg flex items-center px-2 gap-2 cursor-pointer overflow-hidden transition duration-300 hover:shadow-sm">
        {/* Image of order */}
      <img src="pizzas/first.avif" alt="Food" className="w-20" />

      
      {/* Order's name and price */}
      <div className="flex flex-col font-semibold ">
        <span>Додстер</span>
        <span>189 ₽</span>
      </div>
    </div>
  );
}
