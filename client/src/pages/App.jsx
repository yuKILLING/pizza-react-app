import "./App.css";
import Header from "../components/Header/Header";
import MainFoodSection from "../components/MainFoodSection";
import Footer from "../components/Footer";
import PizzaAdSection from "../components/PizzaAdSection";

export default function App() {
  return (
    <>
      <Header />
      <PizzaAdSection />
      <MainFoodSection />
      <Footer />
    </>
  );
}
