import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolioData";

interface HeaderProps {
  theme: "dark" | "light";
  activeSection: string;
  onThemeToggle: () => void;
}

const Header = ({ theme, activeSection, onThemeToggle }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold text-gradient"
        >
          {personalInfo.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onThemeToggle}
            className="social-link"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden social-link"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-6 py-3 text-left transition-colors ${activeSection === link.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
