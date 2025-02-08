"use client";

import { techStack } from "../app/data/techstack";

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-b from-[#27667B] to-[#493D9E]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#8A2BE2] hover:shadow-[0_0_15px_5px_rgba(138,43,226,0.3)]"
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-lg font-semibold text-gray-900 text-center px-2 md:ml-3 mt-2">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
