import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import Services from "../sections/Services";
import About from "../sections/About";
import Team from "../sections/Team";
import Technologies from "../sections/Technologies";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Team />
        <Technologies />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
