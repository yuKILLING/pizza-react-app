import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import MenuSection from "./MenuSection/MenuSection";
import OftenOrdersSection from "./OftenOrders/OftenOrdersSection";

// Main Section of Catalog Page, that consist of Food List's that we recieve from backend.
export default function MainFoodSection() {
  // States
  const [pizzas, setPizzas] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function that processes Best-Seller List by counter of orders.
  function findBestSellers(pizzasArray) {
    let sortedArray = [...pizzasArray].sort(
      (a, b) => b.pizza_orders - a.pizza_orders
    );
    return sortedArray.slice(0, 4);
  }

  // Function that fetches data from backend.
  const fetchPizzas = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/pizza/getallpizzas"
      );
      const pizzasData = response.data;
      setPizzas(pizzasData);
      setBestSellers(findBestSellers(pizzasData));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  }, []);

  useEffect(() => {
    fetchPizzas();
  }, [fetchPizzas]);

  return (
    <section className="max-w-[1320px] m-auto flex flex-col">
      <OftenOrdersSection bestSellers={bestSellers} loading={loading} />
      <MenuSection pizzas={pizzas} loading={loading} />
    </section>
  );
}
