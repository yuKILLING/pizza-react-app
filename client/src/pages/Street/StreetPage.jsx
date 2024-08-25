import { useState } from "react";
import Header from "../../components/Header/Header";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer";
import StreetSection from "../../components/StreetSection/StreetSection";

export default function Delivery() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      <Header setCart={setIsCartOpen} />
      <Cart open={isCartOpen} setCart={setIsCartOpen} />
      <div className="flex-1">
        <StreetSection />
      </div>
      <Footer />
    </div>
  );
}
