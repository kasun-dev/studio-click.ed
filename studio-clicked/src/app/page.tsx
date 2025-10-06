import Footer from "./components/Footer";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ServicePage from "./pages/services";

export default function Page() {
  return (
    <div
      className="scroll-smooth min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/background.jpg')" }} // your background image in /public
    >
      {/* Overlay (optional, if you want darken/lighten effect) */}
      <div className="bg-black/10 min-h-screen">
        {/* Hero / Home Section */}
        <HomePage />
        {/* Services Section */}
        <ServicePage />
        {/* Contact Section */}
        <ContactPage />
        {/*about section */}
        <AboutPage />
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}
