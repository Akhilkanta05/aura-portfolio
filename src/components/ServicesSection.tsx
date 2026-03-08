import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages I use to build robust applications and solve complex computational problems.",
    tags: ["C Programming", "Python", "Java", "JavaScript"],
  },
  {
    title: "Web Development",
    description: "Building responsive, user-friendly web interfaces and full-stack applications from scratch.",
    tags: ["HTML", "CSS", "JavaScript", "Full-Stack Apps"],
  },
  {
    title: "Data & Analytics",
    description: "Turning raw data into insights through visualization, analysis, and machine learning techniques.",
    tags: ["Power BI", "Data Visualization with R", "EDA", "Clustering Algorithms"],
  },
  {
    title: "Tools & Platforms",
    description: "Leveraging modern tools for automation, data management, and workflow optimization.",
    tags: ["Master Data Management", "N8n", "Salesforce Agentforce", "Chrome Extensions"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 lg:py-48 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Skills & Technologies
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
            What I work with
          </h2>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-[1.05] mt-1">
            every day
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-base text-muted-foreground max-w-2xl mb-16 lg:mb-24"
        >
          From writing low-level C code to building AI voice assistants — I enjoy the full spectrum of software development.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group bg-card rounded-lg p-8 lg:p-10 border border-border hover:border-accent/30 transition-colors duration-500"
            >
              <h4 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {cat.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
