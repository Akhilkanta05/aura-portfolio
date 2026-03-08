import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 lg:py-48 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12 text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-4 leading-[1.05]"
        >
          Let's <span className="text-accent">connect</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-[0.1em] uppercase px-8 py-4 border border-foreground/20 rounded-full text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@alexmorgan.com"
            className="font-body text-sm tracking-[0.1em] uppercase px-8 py-4 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            hello@alexmorgan.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
