import MenuList from "./MenuList";

// This is Menu-Section
export default function MenuSection({ pizzas, loading }) {
  return (
    <section className="flex flex-col min-h-[700px]">
      <h3 className="text-3xl font-bold my-10">Пиццы</h3>
      {/* Menu-List component */}
      {!loading ? (
        <MenuList pizzas={pizzas} />
      ) : (
        <div className="flex justify-center items-center flex-1 transition">
          <img src="/icons/loading.svg" alt="Loading" className="w-20" />
        </div>
      )}
    </section>
  );
}
