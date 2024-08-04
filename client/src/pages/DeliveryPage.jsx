import "./Delivery.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import DeliverySection from "../components/DeliverySection/DeliverySection";

export default function Delivery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <DeliverySection />
      </div>
      <Footer />
    </div>
  );
}
