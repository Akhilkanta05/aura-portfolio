import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { title: "Noir Identity", category: "Brand Identity", image: project1 },
  { title: "Luxe Digital", category: "Web Design", image: project2 },
  { title: "Essence Packaging", category: "Packaging", image: project3 },
  { title: "Editorial Quarterly", category: "Editorial Design", image: project4 },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="image-zoom aspect-[4/5] mb-6 bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="font-display text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground mt-1 tracking-wider uppercase">
            {project.category}
          </p>
        </div>
        <motion.span
          className="font-body text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 4 }}
        >
          View →
        </motion.span>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 lg:py-48">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16 lg:mb-24"
        >
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
              Featured <span className="italic">Projects</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
