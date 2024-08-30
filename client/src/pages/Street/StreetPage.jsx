import { useState } from "react";
import Header from "../../components/Header/Header";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer";
import StreetSection from "../../components/StreetSection/StreetSection";
import { CartProvider } from "../../react-context/cartContext";
import { YMaps } from "@pbe/react-yandex-maps";

export default function Delivery() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartProvider>
      <YMaps>
        <div className="flex flex-col min-h-screen">
          <Header setIsCartOpen={setIsCartOpen} />
          <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
          <div className="flex-1">
            <StreetSection />
          </div>
          <Footer />
        </div>
      </YMaps>
    </CartProvider>
  );
}
