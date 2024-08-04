import Button from "../Button/Button";

// That's Menu-Item component, which is included in Menu-List component

export default function MenuItem({ status }) {
  // Menu Item
  return (
    <div className="flex flex-col w-[300px] justify-center cursor-pointer relative">
      {/* Pizza Image */}
      <img
        src="/pizzas/first.avif"
        alt="Pizza"
        className="w-64 self-center transition hover:-translate-y-2"
      />

      {/* BestSeller flag, hidden by default */}
      <span className="hidden absolute top-0 right-5 px-4 py-1 rounded-2xl bg-secondaryOrange text-white font-semibold text-xl">
        Хит
      </span>

      {/* Profitable flag, hidden by default*/}
      <span className=" absolute top-0 right-5 px-4 py-1 rounded-2xl bg-primaryYellow text-black font-semibold text-xl">
        Выгодно
      </span>


      {/* Pizza's name and description */}
      <h1 className="my-1 self-start text-xl font-bold">Мясная с аджикой</h1>
      <p className="max-h-[100px] text-sm opacity-80">
        Баварские колбаски, острый соус аджика, острые колбаски чоризо,
        цыпленок, пикантная пепперони, моцарелла, фирменный томатный соус
      </p>

      {/* Price */}
      <div className="flex justify-between items-center mt-3 px-1">
        <span className="text-2xl font-bold">499 ₽</span>
        <Button>В корзину</Button>
      </div>
    </div>
  );
}
