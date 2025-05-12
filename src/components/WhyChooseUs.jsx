import { FaShieldAlt, FaClock, FaHandshake, FaStar } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      title: "Secure & Trusted",
      desc: "We value your data privacy and protect your transactions.",
    },
    {
      icon: <FaClock className="text-blue-600 text-3xl" />,
      title: "Fast Process",
      desc: "Get valuation and payout in as little as 24 hours.",
    },
    {
      icon: <FaHandshake className="text-blue-600 text-3xl" />,
      title: "Fair Valuation",
      desc: "We offer transparent and competitive pricing.",
    },
    {
      icon: <FaStar className="text-blue-600 text-3xl" />,
      title: "Great Support",
      desc: "Our team is here to assist you every step of the way.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose SoftSell?</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {reasons.map((item, idx) => (
          <div key={idx} className="p-6 border rounded hover:shadow transition">
            {item.icon}
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
