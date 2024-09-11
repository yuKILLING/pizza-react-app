import MenuItem from "./MenuItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// This is a Menu-List component consisting of Menu-Items that it receives from the backend server

export default function MenuList({pizzas}) {
  const [parent] = useAutoAnimate(null);
  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-24" ref={parent}>
        {pizzas.map(pizza=><MenuItem key={pizza.pizza_id} pizza={pizza}/>)}
      </div>
    </>
  );
}
