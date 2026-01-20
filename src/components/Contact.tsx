import { Mail, MapPin, Phone, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email },
    { icon: Phone, label: "Phone", value: personalInfo.phone },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or just want to say hello? I'd love to hear
              from you. Fill out the form or reach out through any of the channels
              below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
