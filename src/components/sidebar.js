"use client";

import { Linkedin, Github, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen  w-16 bg-[#3B6790] flex flex-col items-center justify-center space-y-6 shadow-lg z-10">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/muhammad-ilham-febriana-4234a21a4/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#BE3144] transition-colors duration-300"
      >
        <Linkedin size={24} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Understrike123"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#BE3144] transition-colors duration-300"
      >
        <Github size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:muhilhamfebr2@gmail.com"
        className="text-white hover:text-[#BE3144] transition-colors duration-300"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}
