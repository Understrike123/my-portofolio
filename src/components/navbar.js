"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3B6790] p-4 shadow-lg fixed top-0 left-o w-full z-[5]">
      <div className="container mx-auto flex justify-center items-center">
        {/* Tautan Navigasi (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="#main"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#tech-stack"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
          >
            Tech Stack
          </Link>
          <Link
            href="#experience"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
          >
            Pengalaman
          </Link>
          <Link
            href="#skills"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
          >
            Keahlian
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
          >
            Hubungi saya
          </Link>
        </div>

        {/* Tombol Menu (Mobile) */}
        <button
          className="md:hidden text-white hover:text-[#BE3144] transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Tautan Navigasi (Mobile) */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 p-4 bg-[#2973B2] rounded-lg shadow-md">
          <Link
            href="#main"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#tech-stack"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Tech Stack
          </Link>
          <Link
            href="#experience"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Pengalaman
          </Link>
          <Link
            href="#skills"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Keahlian
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-[#BE3144] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Hubungi saya
          </Link>
        </div>
      )}
    </nav>
  );
}
