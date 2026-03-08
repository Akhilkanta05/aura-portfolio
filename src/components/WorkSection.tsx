import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Data Analytics Dashboard",
    category: "Data Visualization",
    description: "An interactive dashboard that visualizes and analyzes raw data using dynamic charts, filters, and real-time insights.",
    tags: ["Python", "Power BI", "EDA", "Visualization"],
    image: project1,
  },
  {
    title: "AI Voice Assistant",
    category: "Artificial Intelligence",
    description: "A conversational AI system that understands voice commands and performs tasks using speech recognition and automation.",
    tags: ["Python", "Speech Recognition", "NLP", "Automation"],
    image: project2,
  },
  {
    title: "E-Commerce Recommendation Engine",
    category: "Machine Learning",
    description: "A machine learning model that recommends products to users based on preferences, browsing history, and behavior patterns.",
    tags: ["ML", "Python", "Clustering", "Feature Engineering"],
    image: project3,
  },
  {
    title: "Face Recognition Attendance",
    category: "Computer Vision",
    description: "An automated system that detects faces and marks attendance in real time using computer vision and deep learning.",
    tags: ["OpenCV", "Python", "Deep Learning", "Real-time"],
    image: project4,
  },
];

const moreProjects = [
  {
    title: "Ticket Booking System",
    description: "Full-stack application enabling users to browse shows, select seats, and book tickets with database-backed management.",
    tags: ["Full-Stack", "JavaScript", "Database"],
  },
  {
    title: "Password Suggestion & Smart CAPTCHA Extension",
    description: "Chrome extension that generates strong password suggestions and includes a smart CAPTCHA interaction feature for faster logins.",
    tags: ["Chrome Extension", "JavaScript", "Security"],
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-32 lg:py-48">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-24"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What I've Built
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-20 lg:space-y-32 mb-20 lg:mb-32">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <ProjectCard key={project.title} project={project} isEven={isEven} />
            );
          })}
        </div>

        {/* More projects as list */}
        <div className="border-t border-border pt-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
            More Projects
          </p>
          {moreProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group border-b border-border py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 cursor-pointer hover:pl-4 transition-all duration-500"
            >
              <h4 className="font-display text-lg lg:text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 md:w-80 shrink-0">
                {project.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 shrink-0">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-body text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
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

const ProjectCard = ({ project, isEven }: { project: typeof projects[0]; isEven: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer"
    >
      <div className={`image-zoom rounded-lg bg-secondary aspect-[4/3] ${isEven ? "" : "lg:order-2"}`}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className={isEven ? "" : "lg:order-1"}>
        <p className="font-body text-xs tracking-[0.15em] uppercase text-accent mb-3">
          {project.category}
        </p>
        <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-body text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkSection;
