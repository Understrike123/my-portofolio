import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import About from "../components/aboutMe";
import Hero from "@/components/heroMain";
import Skills from "@/components/skills";
import ProjectsSection from "@/components/projects";
import ExperienceSection from "../components/experiences";
import TechStackSection from "@/components/techStacks";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden pl-16 md:pl-16 min-h-screen bg-gradient-to-b from-[#3B6790] to-[#2973B2]">
      <Sidebar />
      <div className="fixed left-18 ml-2 top-4 z-50">
        <Link
          href="/"
          className="text-white text-2xl font-bold hover:text-[#BE3144] transition-colors duration-300"
        >
          Febs_
        </Link>
      </div>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tech stack */}
      <TechStackSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects section */}
      <ProjectsSection />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Footer />
    </div>
  );
}
