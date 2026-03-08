import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Brand Identity & Strategy",
    description:
      "End-to-end brand creation — from strategy and positioning to visual identity, guidelines, and rollout. Built for brands that want to own their space.",
    tags: ["Logo Systems", "Brand Guidelines", "Visual Identity", "Positioning", "Naming"],
  },
  {
    title: "Digital Design & Web",
    description:
      "Immersive websites and digital products designed for impact. Every pixel serves a purpose — clarity, conversion, and unforgettable user experience.",
    tags: ["Web Design", "UI/UX", "Interaction Design", "Prototyping", "Responsive"],
  },
  {
    title: "Art Direction",
    description:
      "Conceptual vision and creative leadership for campaigns, photoshoots, and content. Bringing ideas to life with intentional aesthetics.",
    tags: ["Campaign Direction", "Photography", "Visual Storytelling", "Content Strategy"],
  },
  {
    title: "Packaging & Print",
    description:
      "Tactile, shelf-stopping designs that elevate your product. From concept through production-ready files.",
    tags: ["Packaging", "Editorial", "Print Collateral", "Production"],
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
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
            Here's what I actually do
          </h2>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-[1.05] mt-1">
            all day
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-base text-muted-foreground max-w-2xl mb-16 lg:mb-24"
        >
          My excuse to obsess over grids, type systems, and visual storytelling — while pretending
          it's all very serious professional work.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group bg-card rounded-lg p-8 lg:p-10 border border-border hover:border-accent/30 transition-colors duration-500"
            >
              <h4 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
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
