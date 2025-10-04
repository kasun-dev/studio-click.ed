import Footer from "./components/Footer";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ServicePage from "./pages/services";

export default function Page() {
  return (
    <div className="scroll-smooth">
      {/* Hero / Home Section */}
      <HomePage />
      {/* Services Section */}
      <ServicePage />
      {/* Contact Section */}
      <ContactPage />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
