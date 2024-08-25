import "./App.css";
import Header from "../../components/Header/Header";
import MainFoodSection from "../../components/MainFoodSection";
import Footer from "../../components/Footer";
import PizzaAdSection from "../../components/PizzaAdSection";
import Cart from "../../components/Cart/Cart";
import { useState } from "react";
export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <>
      <Header setCart={setIsCartOpen}/>
      <Cart open={isCartOpen} setCart={setIsCartOpen}/>
      <PizzaAdSection />
      <MainFoodSection />
      <Footer />
    </>
  );
}
