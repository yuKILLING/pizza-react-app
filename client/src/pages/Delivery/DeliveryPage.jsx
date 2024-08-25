import { useState } from "react";
import Cart from "../../components/Cart/Cart";
import "./Delivery.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import DeliverySection from "../../components/DeliverySection/DeliverySection";

export default function Delivery() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header setCart={setIsCartOpen} />
      <Cart open={isCartOpen} setCart={setIsCartOpen} />
      <div className="flex-1">
        <DeliverySection />
      </div>
      <Footer />
    </div>
  );
}
