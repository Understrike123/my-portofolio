"use client";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import About from "../components/aboutMe";
import Hero from "@/components/heroMain";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pl-16 md:pl-16 min-h-screen bg-gradient-to-b from-[#3B6790] to-[#2973B2]">
      <Sidebar />
      <div className="fixed left-18 ml-2 top-4 z-50">
        <Link
          href="/"
          className="text-white text-2xl font-bold hover:text-[#BE3144] transition-colors duration-300"
        >
          MyLogo
        </Link>
      </div>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#3B6790]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Pengalaman
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#2973B2] mb-2">
                Frontend Developer
              </h3>
              <p className="text-gray-600">
                Mengembangkan antarmuka pengguna yang responsif dan modern
                menggunakan React dan Tailwind CSS.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#2973B2] mb-2">
                Backend Developer
              </h3>
              <p className="text-gray-600">
                Membangun API yang aman dan efisien menggunakan Node.js dan
                Express.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#2973B2] mb-2">
                Fullstack Developer
              </h3>
              <p className="text-gray-600">
                Mengintegrasikan frontend dan backend untuk menciptakan aplikasi
                web yang lengkap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Footer />
    </div>
  );
}
