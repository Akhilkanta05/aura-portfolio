import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Logos, visual systems, and brand guidelines that define who you are.",
  },
  {
    number: "02",
    title: "Web Design",
    description: "Immersive digital experiences built for impact and conversion.",
  },
  {
    number: "03",
    title: "Art Direction",
    description: "Conceptual vision and creative leadership for campaigns and shoots.",
  },
  {
    number: "04",
    title: "Packaging",
    description: "Tactile, shelf-stopping designs that elevate your product.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 lg:py-48 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Services
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-border py-10 lg:py-14 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 cursor-pointer hover:pl-4 transition-all duration-500"
            >
              <span className="font-body text-sm text-muted-foreground tracking-wider">
                {service.number}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 md:w-64 lg:w-80">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-base flex-1">
                {service.description}
              </p>
              <motion.span
                className="font-body text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
              >
                →
              </motion.span>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
