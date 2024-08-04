import OftenOrdersItem from "./OftenOrdersItem";

export default function OftenOrdersList() {
  return (
    <section className="flex gap-6 flex-wrap">
      <OftenOrdersItem />
      <OftenOrdersItem />
      <OftenOrdersItem />
    </section>
  );
}
