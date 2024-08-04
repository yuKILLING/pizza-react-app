import MenuList from "./MenuList";

// This is Menu-Section
export default function MenuSection({pizzas}) {
  return (
    <section className="flex flex-col">
      <h3 className="text-3xl font-bold my-10">Пиццы</h3>
      {/* Menu-List component */}
      <MenuList pizzas={pizzas}/>
    </section>
  );
}
