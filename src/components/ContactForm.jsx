import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", licenseType: "", message: "",
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert("Form submitted! (Frontend validation only)");
  };

  return (
    <section className="py-16 px-6 bg-white" id="contact">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid gap-6 bg-gray-50 p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          required
          value={form.company}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <select
          name="licenseType"
          required
          value={form.licenseType}
          onChange={handleChange}
          className="p-3 border rounded"
        >
          <option value="">Select License Type</option>
          <option value="windows">Windows</option>
          <option value="adobe">Adobe</option>
          <option value="autodesk">Autodesk</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          required
          value={form.message}
          onChange={handleChange}
          rows="4"
          className="p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
