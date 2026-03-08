import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 lg:py-48">
      <div className="container mx-auto px-6 lg:px-12 text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-8"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-8xl font-medium text-foreground mb-12 leading-[1.1]"
        >
          Let's create
          <br />
          something <span className="italic text-primary">extraordinary</span>
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          href="mailto:hello@studio.com"
          className="inline-block font-body text-lg tracking-wider text-foreground border-b border-primary pb-2 hover:text-primary transition-colors duration-300"
        >
          hello@studio.com
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
