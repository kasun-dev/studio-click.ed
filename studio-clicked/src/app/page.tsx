import Footer from "./components/Footer";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ServicePage from "./pages/services";

export default function Page() {
  return (
    <div className="relative scroll-smooth min-h-screen">
      {/* Fixed Background Layer */}
      <div
        className="fixed inset-0 bg-center bg-cover z-[-1]"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* Overlay (optional) */}
      <div className="bg-black/10 min-h-screen">
        {/* Hero / Home Section */}
        <section id="home">
          <HomePage />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicePage />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactPage />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutPage />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
