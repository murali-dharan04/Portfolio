import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section-alt">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="relative pl-8">
          <div className="timeline-line" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="timeline-dot top-2" />
                <div className="card-base ml-4">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center flex-shrink-0">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
