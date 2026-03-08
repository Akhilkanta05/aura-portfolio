import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Algonive",
    period: "Jan 2026 – Feb 2026",
    points: [
      "Developed a Task Manager web app using JavaScript with add, edit, delete tasks, deadlines, and local storage.",
      "Built a Task Management System for small teams with task assignment, status tracking, and deadline reminders.",
    ],
    tags: ["JavaScript", "Web Dev", "Local Storage"],
  },
  {
    role: "Data Analytics Intern",
    company: "Algonive",
    period: "Jan 2026 – Apr 2026",
    points: [
      "Customer Segmentation Using Python: categorized customers based on purchasing behavior and demographics.",
      "Performed data cleaning, EDA, applied clustering algorithms, feature engineering, and created dashboards.",
    ],
    tags: ["Python", "EDA", "Clustering", "Dashboards"],
  },
];

const certificates = [
  "Salesforce Certified Agentforce Specialist",
  "Complete Guide to Python Data Analysis with Real Datasets",
  "Master Data Management for Beginners – TCS iON",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 lg:py-48 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-24"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Where I've <span className="text-accent">worked</span>
          </h2>
        </motion.div>

        <div className="space-y-8 mb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 lg:p-10 group hover:border-accent/30 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                <div>
                  <h4 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                  </h4>
                  <p className="font-body text-sm text-accent mt-1">{exp.company}</p>
                </div>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground shrink-0">
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                {exp.points.map((point, j) => (
                  <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-3">
                    <span className="text-accent mt-1 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="font-body text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Certifications
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-500"
              >
                <p className="font-body text-sm text-foreground leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
