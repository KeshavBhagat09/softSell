export default function Testimonials() {
    const testimonials = [
      {
        name: "Alice Johnson",
        role: "IT Manager",
        company: "TechNova Inc.",
        quote: "SoftSell made it easy to turn our unused licenses into extra cash. Smooth and secure!",
      },
      {
        name: "Mark Lee",
        role: "Procurement Lead",
        company: "ByteWave Ltd.",
        quote: "The process was fast, the support team was great, and the payout was fair. Highly recommend!",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  