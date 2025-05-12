import { FaUpload, FaDollarSign, FaCheckCircle } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload className="text-blue-600 text-4xl" />,
      title: "Upload License",
      description: "Provide details of your software license.",
    },
    {
      icon: <FaDollarSign className="text-blue-600 text-4xl" />,
      title: "Get Valuation",
      description: "We estimate your license's resale value.",
    },
    {
      icon: <FaCheckCircle className="text-blue-600 text-4xl" />,
      title: "Get Paid",
      description: "Receive payment once it's sold.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded shadow">
            {step.icon}
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
