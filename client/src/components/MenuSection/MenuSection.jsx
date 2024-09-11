import React, { useState } from "react";
import MenuList from "./MenuList";

// This is Menu-Section
export default function MenuSection({ pizzas, loading }) {
  const [sortMethod, setSortMethod] = useState("byPrice");
  // Pizza handling
  const handleSelect = (e) => {
    setSortMethod(e.target.value);
  };

  const sortedPizzas = () => {
    switch (sortMethod) {
      case "byPopular":
        return [...pizzas].sort((a, b) => b.pizza_orders - a.pizza_orders);
      case "byPrice":
        return [...pizzas].sort((a, b) => a.pizza_price - b.pizza_price);
      case "byName":
        return [...pizzas].sort((a, b) =>
          a.pizza_name.localeCompare(b.pizza_name)
        );
      default:
        return pizzas;
    }
  };

  return (
    <section className="flex flex-col min-h-[700px]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-bold my-10">Пиццы</h3>
        <select
          className="outline-none shadow p-1 transition"
          onChange={handleSelect}
          value={sortMethod}
        >
          <option value="byPrice">По цене</option>
          <option value="byPopular">По популярности</option>
          <option value="byName">По названию</option>
        </select>
      </div>
      {/* Menu-List component */}
      {!loading ? (
        <MenuList pizzas={sortedPizzas()} />
      ) : (
        <div className="flex justify-center items-center flex-1 transition">
          <img src="/icons/loading.svg" alt="Loading" className="w-20" />
        </div>
      )}
    </section>
  );
}
