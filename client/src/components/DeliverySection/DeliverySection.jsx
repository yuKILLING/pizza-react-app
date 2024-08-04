import DeliveryBlocks from "./DeliveryBlocks";
// Delivery Section
export default function DeliverySection() {
  return (
    <section className="mt-20 w-[900px] m-auto space-y-10 text-lg">
      <h5 className="bg-primaryBlue inline text-white text-3xl font-bold p-1">
        Как заказывать?
      </h5>
      <p>
        <span className="text-2xl font-black">Все просто!</span> Выбери адрес
        куда доставлять, затем во вкладке каталог, выбери какую{" "}
        <span className="text-primaryOrange">пиццу</span> собираешься заказать,
        в корзине оформи заказ, и жди доставку.
      </p>
      <span className="bg-primaryBlue text-white inline text-xl font-bold">
        Время доставки зависит от местоположения!
      </span>
      <p className="font-bold">Ниже представлены наши филиалы:</p>
      <div className="flex justify-between">
        <DeliveryBlocks />
      </div>
      <p className="flex flex-col gap-6">
        <span className="flex flex-col">
          По вопросам доставки:
          <span className="font-semibold">8 800 302-00-60</span>
        </span>
        <span className="flex flex-col">
          По предложениям:
          <span className="font-semibold">feedback@dodopizza.com</span>
        </span>
      </p>
    </section>
  );
}
