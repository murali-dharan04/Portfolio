import { ArrowDown, FileText, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="code-text text-lg mb-4 animate-fade-up">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 flex items-center gap-2 h-[1.2em]">
            <span className="animate-typing">
              {personalInfo.name}
            </span>
            <span className="text-gradient">.</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground mb-6 animate-fade-up-delay-2">
            {personalInfo.role}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-10 animate-fade-up-delay-3">
            {personalInfo.summary}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <button
              onClick={scrollToAbout}
              className="btn-primary flex items-center gap-2"
            >
              Explore My Work
              <ArrowDown size={18} />
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <FileText size={18} />
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float transition-transform hover:scale-110 focus:outline-none"
        aria-label="Scroll to about section"
      >
        <div className="w-12 h-12 rounded-full border border-primary/30 bg-background/30 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-all duration-300 group">
          <ChevronDown className="text-primary w-5 h-5 -mb-2 group-hover:translate-y-1 transition-transform duration-300" />
          <ChevronDown className="text-primary w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 delay-75" />
        </div>
        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase opacity-70">Scroll Down</span>
      </button>
    </section>
  );
};

export default Hero;
