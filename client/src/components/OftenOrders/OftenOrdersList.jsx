import OftenOrdersItem from "./OftenOrdersItem";
// This is Often-Orders-List, which you can see on top of the catalog Page.
export default function OftenOrdersList({ bestSellers }) {
  return (
    <div className="flex gap-6 flex-wrap">
      {bestSellers.map(bestSeller => <OftenOrdersItem key={bestSeller.pizza_id} bestSeller={bestSeller}/>)}
    </div>
  );
}
