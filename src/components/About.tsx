import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, efficient solutions.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed, scalability, and user experience.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively to deliver exceptional results together.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-alt">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate software developer with a love for creating digital
              experiences that are both beautiful and functional. With expertise in
              modern web technologies, I bring ideas to life through clean code and
              thoughtful design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or mentoring aspiring developers.
              I believe in continuous learning and pushing the boundaries of what's
              possible on the web.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-8xl">👨‍💻</span>
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-2xl border-2 border-primary/30 -z-10" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="card-base text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
