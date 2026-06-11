
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Technologies from "../sections/Technologies";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <main>
        <Hero />
        {/* <Work /> */}
        <About />
        <Services />
        {/* <Team /> */}
        <Technologies />
        {/* <Pricing /> */}
        <Contact />
      </main>
    </div>
  );
}
