import MenuSection from "./MenuSection/MenuSection";
import OftenOrdersSection from "./OftenOrders/OftenOrdersSection";

// Main Section of Catalog Page, that consist of Food List's
export default function MainFoodSection() {
  return (
    <section className="max-w-[1320px] m-auto">
      <OftenOrdersSection />
      <MenuSection />
    </section>
  );
}
