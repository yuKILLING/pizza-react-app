import OftenOrdersList from "./OftenOrdersList";

export default function OftenOrdersSection({bestSellers}) {
  // This is Often-Orders-Section
  return (
    <section className="mt-20">
      <h3 className="text-3xl font-bold my-10">Часто заказывают</h3>
      {/* Often-Orders-List */}
      <OftenOrdersList bestSellers={bestSellers}/>
    </section>
  );
}
