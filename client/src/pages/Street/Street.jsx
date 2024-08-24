import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import StreetSection from "../../components/StreetSection/StreetSection";

export default function Delivery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <StreetSection />
      </div>
      <Footer />
    </div>
  );
}
