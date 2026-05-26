import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Startup from "@/components/Startup"; 
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <div className="grid-bg fixed inset-0 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience /> 
        <Projects />
        <Startup />  
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
