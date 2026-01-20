import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export const personalInfo = {
  name: "Muralidharan.E",
  role: "AI/ML Engineer",
  tagline: "Passionate about building intelligent systems.",
  profileImage: "/profile.jpeg",
  summary: "Aspiring Machine Learning Engineer with strong foundations in Artificial Intelligence, Deep Learning, Data Science, and Predictive Analytics. Interested in building intelligent systems that solve real-world problems and deliver measurable business impact. Motivated Machine Learning Engineer focused on building scalable AI solutions using data-driven approaches. Passionate about continuous learning, research, and applying emerging technologies such as Retrieval-Augmented Generation (RAG) systems, deep learning, and cloud-based AI platforms.",
  email: "muralidharanengin@gmail.com",
  phone: "+91 9025999927",
  location: "India",
  resumeUrl: "https://drive.google.com/file/d/1PVq9kVmNbqfQY_mUy4iQKvVaNKcZlnlA/view",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/murali-dharan04", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muralidharan-e", icon: Linkedin },
  { name: "Instagram", url: "https://www.instagram.com/m.u.r.a.l.i_dharan", icon: Instagram },
  { name: "Email", url: "mailto:muralidharanengin@gmail.com", icon: Mail },
];

export const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Workshops", id: "workshops" },
  { name: "Contact", id: "contact" },
];

export const skills = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "C", level: 80, category: "Programming" },
  { name: "Java", level: 75, category: "Programming" },
  { name: "Supervised Learning", level: 85, category: "Machine Learning" },
  { name: "Predictive Analytics", level: 85, category: "Machine Learning" },
  { name: "Model Evaluation", level: 85, category: "Machine Learning" },
  { name: "Neural Network Fundamentals", level: 80, category: "Deep Learning" },
  { name: "TensorFlow", level: 75, category: "Libraries & Tools" },
  { name: "MySQL", level: 80, category: "Databases" },
  { name: "NLP Basics", level: 80, category: "Core Concepts" },
  { name: "RAG Systems", level: 85, category: "Core Concepts" },
  { name: "Data Preprocessing", level: 90, category: "Core Concepts" },
];

export const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Sparkout Tech Pvt Ltd",
    duration: "June 2025 – July 2025",
    description: "Developed end-to-end machine learning pipelines including preprocessing, feature engineering, model training, and evaluation.",
    highlights: [
      "Applied supervised learning algorithms to real-world predictive problems",
      "Conducted EDA, data cleaning, and normalization",
      "Evaluated models using accuracy, precision, recall, and validation metrics",
      "Utilized Python and ML libraries for model development",
      "Collaborated with mentors following industry-standard ML workflows",
    ],
  },
];

export const education = [
  {
    degree: "B.E Computer Science Engineering (AI & ML)",
    institution: "Paavai Engineering College",
    year: "2022 - 2026",
    score: "CGPA: 8.14",
  },
  {
    degree: "HSC",
    institution: "Sri Vinayaga International School",
    year: "2022",
    score: "Percentage: 64%",
  },
  {
    degree: "SSLC",
    institution: "Gnanodaya International School",
    year: "2020",
    score: "Percentage: 66%",
  },
];

export const projects = [
  {
    title: "AI-Based PDF Summarization using RAG",
    description: [
      "Designed an AI-based document summarization system using Retrieval-Augmented Generation",
      "Implemented document ingestion, preprocessing, and context retrieval",
      "Generated concise, context-aware summaries from large PDF documents",
      "Applied NLP techniques to handle unstructured data",
      "Demonstrates understanding of modern AI architectures"
    ],
    technologies: ["Python", "NLP", "RAG", "LLM"],
    link: "#",
  },
  {
    title: "Predictive Analytics Machine Learning Project",
    description: [
      "Built a predictive analytics model using historical datasets",
      "Performed feature selection, model training, and validation",
      "Analyzed patterns and trends to support data-driven decisions",
      "Evaluated model performance using accuracy and validation metrics"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    link: "#",
  },
];

export const workshops = [
  {
    title: "AI with RAG Systems",
    institution: "Kongu Engineering College",
    year: "2024",
  },
  {
    title: "Web Development Workshop",
    institution: "National Institute of Technology (NIT), Trichy",
    year: "2023",
  },
  {
    title: "Hands-on AI Workshop",
    institution: "PSG College of Technology",
    year: "2023",
  },
];

export const certifications = [
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    score: "Score: 60%",
    year: "2024",
  },
];
