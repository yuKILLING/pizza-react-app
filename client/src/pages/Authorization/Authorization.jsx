import { useState } from "react";
import { CartProvider } from "../../react-context/cartContext";
import { Toaster } from "react-hot-toast";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import AuthorizationBlock from "../../components/Authorization/AuthorizationBlock";

export default function Delivery() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Toaster position="top-left" />
        <Header setIsCartOpen={setIsCartOpen} />
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <div className="flex-1 justify-center items-center flex">
          <AuthorizationBlock />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}
