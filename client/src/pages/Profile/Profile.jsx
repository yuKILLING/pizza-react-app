import { useState } from "react";
import { CartProvider } from "../../react-context/cartContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Cart from "../../components/Cart/Cart";
import ProfileSection from "./ProfileSection";
export default function Profile() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header setIsCartOpen={setIsCartOpen} />
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <div className="flex-1">
          <ProfileSection/>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}
