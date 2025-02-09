"use client";

import { useEffect, useRef } from "react";
import { experiences } from "../app/data/experience"; // Import data pengalaman

export default function ExperienceSection() {
  const experienceRefs = useRef([]);

  // useEffect untuk mengatur animasi sliding
  useEffect(() => {
    // Membuat IntersectionObserver untuk mendeteksi kapan elemen masuk ke viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Menambahkan class "animate-slide-in" saat elemen terlihat di viewport
            entry.target.classList.add("animate-slide-in");
            // Berhenti mengamati elemen setelah animasi dipicu
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Ambang batas: 10% dari elemen harus terlihat
    );

    // Mengamati setiap elemen yang ada di experienceRefs
    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Membersihkan observer saat komponen di-unmount
    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Dependency array kosong agar useEffect hanya dijalankan sekali

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-[#F9FAFB] to-[#E5E7EB]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Pengalaman
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              ref={(el) => (experienceRefs.current[index] = el)} // Menyimpan referensi ke elemen
              className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-10 ease-out opacity-0 ${
                index % 2 === 0 ? "translate-x-[-100px]" : "translate-x-[100px]"
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Ikon Pengalaman */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Konten Pengalaman */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 font-semibold">
                    {experience.company} | {experience.location} |{" "}
                    {experience.duration}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-gray-600 flex items-start"
                      >
                        <span className="mr-2">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS untuk animasi sliding */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}
