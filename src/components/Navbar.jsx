import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition ${scrolled ? "bg-white shadow" : "bg-transparent"}`}>
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <div className="text-xl font-bold text-blue-600">SoftSell</div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#how" className="hover:text-blue-600">How It Works</a></li>
          <li><a href="#why" className="hover:text-blue-600">Why Us</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
