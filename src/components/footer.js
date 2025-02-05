"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#143D60] text-white py-10 px-6">
      <div id="contact" className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Hubungi Saya</h2>
        <p className="text-lg mb-4">
          Jika Anda ingin berkomunikasi atau memberikan feedback, silakan isi
          form di bawah ini.
        </p>

        {/* Form */}
        <form className="bg-[#3B6790] p-6 rounded-lg shadow-lg space-y-4">
          {/* Nama */}
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full p-3 rounded-lg bg-[#1E3A5A] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-[#1E3A5A] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-[#1E3A5A] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          {/* Isi Feedback */}
          <textarea
            placeholder="Tulis pesan Anda..."
            rows="4"
            className="w-full p-3 rounded-lg bg-[#1E3A5A] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          ></textarea>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full bg-[#BE3144] hover:bg-[#a82b3a] text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Muhammad Ilham Febriana. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
