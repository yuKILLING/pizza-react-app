import "./Delivery.css";
import { useState } from "react";
import { CartProvider } from "../../react-context/cartContext";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import DeliverySection from "../../components/DeliverySection/DeliverySection";

export default function Delivery() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header setIsCartOpen={setIsCartOpen} />
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <div className="flex-1">
          <DeliverySection />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}
  