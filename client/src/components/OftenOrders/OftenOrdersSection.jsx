import OftenOrdersList from "./OftenOrdersList";

export default function OftenOrdersSection({ bestSellers, loading }) {
  // This is Often-Orders-Section
  return (
    <section className="flex flex-col">
      <h3 className="text-3xl font-bold my-10">Часто заказывают</h3>
      {/* Often-Orders-List */}
      {!loading && <OftenOrdersList bestSellers={bestSellers} />}
      {loading && (
        <img src="/icons/loading.svg" alt="Loading" className="w-20 self-center" />
      )}
    </section>
  );
}
