import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "../../components/Header/Header";
import MainFoodSection from "../../components/MainFoodSection";
import Footer from "../../components/Footer";
import PizzaAdSection from "../../components/PizzaAdSection";
import Cart from "../../components/Cart/Cart";
import { CartProvider } from "../../react-context/cartContext"; 

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider> {/* Оборачиваем в CartProvider */}
      <Header setCart={setIsCartOpen} />
      <Toaster position="top-left" />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
      <PizzaAdSection />
      <MainFoodSection />
      <Footer />
    </CartProvider>
  );
}
