import OftenOrdersSection from "../OftenOrders/OftenOrdersSection";
import MenuList from "./MenuList";

// This is Menu-Section
export default function MenuSection() {
  return (
    <section className="flex flex-col">
      <h3 className="text-3xl font-bold my-10">Пиццы</h3>
      <MenuList />
    </section>
  );
}
