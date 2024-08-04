import Button from "../Button/Button";

// That's Menu-Item component, which is included in Menu-List component

export default function MenuItem({ pizza }) {
  // Menu Item
  return (
    <div className="flex flex-col w-[300px] cursor-pointer relative">
      {/* Pizza Image */}
      <img
        src={pizza.pizza_img}
        alt="Pizza"
        className="w-64 self-center transition hover:-translate-y-2"
      />

      {/* BestSeller flag, hidden by default. Depending on pizza.status it will be showed */}
      {pizza.pizza_status === "bestseller" && (
        <span className="absolute top-0 right-5 px-4 py-1 rounded-2xl bg-secondaryOrange text-white font-semibold text-xl">
          Хит
        </span>
      )}

      {/* Profitable flag, hidden by default. Depending on pizza.status it will be showed*/}
      {pizza.pizza_status === "profit" && (
        <span className="absolute top-0 right-5 px-4 py-1 rounded-2xl bg-primaryYellow text-black font-semibold text-xl">
          Выгодно
        </span>
      )}

      {/* Pizza's name and description */}
      <h1 className="my-1 self-start text-xl font-bold">{pizza.pizza_name}</h1>
      <p className="h-[80px] text-sm opacity-80 overflow-hidden text-ellipsis">
        {pizza.pizza_description}
      </p>

      {/* Price */}
      <div className="flex justify-between items-center mt-3 px-1">
        <span className="text-2xl font-bold">{pizza.pizza_price} ₽</span>
        <Button>В корзину</Button>
      </div>
    </div>
  );
}
