import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-48">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Welcome
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
              Hi, I'm Alex
            </h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground mt-2">
              I design solutions for
            </h3>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-accent mt-2">
              complex problems
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pt-8"
          >
            <p className="font-body text-base lg:text-lg leading-relaxed text-muted-foreground mb-6">
              I have 10+ years of experience in creative direction and brand design. I specialize in
              transforming complex brand challenges into clear, compelling visual narratives that connect
              with audiences on a deeper level.
            </p>
            <p className="font-body text-base lg:text-lg leading-relaxed text-muted-foreground">
              I like clarity. I like systems. I like when things make sense.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
