import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Noir Identity",
    category: "Brand Identity",
    location: "Paris · 2024–2025",
    description: "Complete brand overhaul for a luxury fashion house — from strategy to visual identity across all touchpoints.",
    tags: ["Branding", "Strategy", "Print"],
    image: project1,
  },
  {
    title: "Luxe Digital",
    category: "Web Design",
    location: "London · 2023–2024",
    description: "Immersive digital experience for a high-end hospitality brand. Full-stack design from concept through launch.",
    tags: ["Web", "UI/UX", "Motion"],
    image: project2,
  },
  {
    title: "Essence Packaging",
    category: "Packaging Design",
    location: "Milan · 2023",
    description: "Premium packaging system for a sustainable beauty brand, balancing luxury with environmental responsibility.",
    tags: ["Packaging", "Print", "Sustainability"],
    image: project3,
  },
  {
    title: "Editorial Quarterly",
    category: "Editorial Design",
    location: "New York · 2022–2024",
    description: "Art direction and layout design for a culture and design magazine. Four issues per year, print and digital.",
    tags: ["Editorial", "Art Direction", "Typography"],
    image: project4,
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
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer ${isEven ? "" : "lg:direction-rtl"}`}
    >
      <div className={`image-zoom rounded-lg bg-secondary aspect-[4/3] ${isEven ? "" : "lg:order-2"}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className={isEven ? "" : "lg:order-1"}>
        <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
          {project.location}
        </p>
        <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkSection;
