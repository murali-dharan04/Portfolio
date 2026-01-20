import { ExternalLink, Folder } from "lucide-react";
import { projects } from "@/data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section-alt">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card-base group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Folder className="text-primary" size={24} />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="mb-4 text-muted-foreground text-sm leading-relaxed">
                {Array.isArray(project.description) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="code-text text-xs bg-primary/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
