import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <section id="how"><HowItWorks /></section>
        <section id="why"><WhyChooseUs /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><ContactForm /></section>
      </main>
    </div>
  );
}

export default App;