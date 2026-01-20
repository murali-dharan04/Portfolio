import { useEffect, useState } from "react";
import { skills } from "@/data/portfolioData";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-primary mb-6">{category}</h3>
              <div className="space-y-5">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${Math.random() * 0.3}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
