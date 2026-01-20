import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Workshops from "@/components/Workshops";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { navLinks } from "@/data/portfolioData";

const Index = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("about");

  // Theme toggle handler
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  // Scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header
        theme={theme}
        activeSection={activeSection}
        onThemeToggle={handleThemeToggle}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Workshops />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
