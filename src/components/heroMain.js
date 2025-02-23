"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="main"
      className="mt-8 pt-18 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-[#3B6790] to-[#2973B2] text-white px-6 md:px-16 py-12"
    >
      {/* Bagian Kiri - Nama & Deskripsi */}
      <div className="fixed left-0 top-0 h-screen w-16 bg-[#3B6790] flex flex-col items-center justify-center space-y-6 shadow-lg"></div>
      <div className="flex-1 text-center md:text-left space-y-4 max-w-[90%] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Muhammad Ilham Febriana
        </h1>
        <p className="text-xl md:text-2xl">
          Web Developer & Data Science Enthusiast
        </p>

        {/* Perubahan di sini: justify-center diubah menjadi justify-start */}
        <div className="my-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="bg-[#BE3144] hover:bg-[#a82b3a] text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
          >
            Hubungi saya
          </a>
          <a
            href="/CV_Muhammad Ilham F (Updated January 2025).pdf"
            download="Muhammad_Ilham_Febriana_CV.pdf"
            className="bg-[#BE3144] hover:bg-[#a82b3a] text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 "
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        {/* <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/muhammad-ilham-febriana-4234a21a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#BE3144] px-6 py-2 rounded-lg hover:bg-[#a82b3a] transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:muhilhamfebr2@gmail.com"
            className="bg-[#BE3144] px-6 py-2 rounded-lg hover:bg-[#a82b3a] transition-all"
          >
            Email
          </a>
        </div> */}
      </div>

      {/* Bagian Kanan - Gambar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/image/photo_Ilham.jpg"
            width={250}
            height={250}
            className="rounded-full shadow-xl transition-transform duration-300 z-0 hover:scale-110"
            alt="Muhammad Ilham Febriana"
          />
        </div>
      </div>
    </section>
  );
}
