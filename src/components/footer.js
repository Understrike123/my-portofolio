"use client";

import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setResponseMessage("Feedback berhasil dikirim!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setResponseMessage(data.error || "Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <footer className="bg-[#143D60] text-white py-10 px-6">
      <div id="contact" className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Hubungi Saya</h2>
        <p className="text-lg mb-4">
          Jika Anda ingin berkomunikasi atau memberikan feedback, silakan isi
          form di bawah ini.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#3B6790] p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1E3A5A] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1E3A5A] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1E3A5A] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <textarea
            name="message"
            placeholder="Tulis pesan Anda..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1E3A5A] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#BE3144] hover:bg-[#a82b3a] text-white font-bold py-3 rounded-lg transition duration-300"
            disabled={loading}
          >
            {loading ? "Mengirim..." : "Send"}
          </button>
        </form>

        {responseMessage && <p className="mt-4 text-lg">{responseMessage}</p>}
      </div>

      <div className="mt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Muhammad Ilham Febriana. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
