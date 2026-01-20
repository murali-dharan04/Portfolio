import { Github, Linkedin, Twitter, Mail, Heart, LucideIcon } from "lucide-react";
import { socialLinks, personalInfo } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-xl font-bold text-gradient">
              {personalInfo.name}
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. Made with{" "}
            <Heart size={14} className="text-primary fill-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
