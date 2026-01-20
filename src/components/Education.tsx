import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/portfolioData";

const Education = () => {
  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card-base">
                  <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-primary">{edu.year}</span>
                    <span className="text-muted-foreground">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Award className="text-primary" size={24} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card-base">
                  <h4 className="font-semibold mb-1">{cert.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span className="text-primary">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
