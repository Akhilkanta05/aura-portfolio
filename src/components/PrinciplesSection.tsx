import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  { number: "01", title: "Less is more", description: "Strip away the unnecessary until only what matters remains. Every element earns its place through purpose, not decoration." },
  { number: "02", title: "Storytelling first", description: "Great design tells a story. Every visual choice should serve the narrative and connect emotionally with the audience." },
  { number: "03", title: "Obsess over craft", description: "Details matter. The difference between good and extraordinary lives in the pixels, the kerning, the micro-interactions." },
  { number: "04", title: "Clarity in everything", description: "The best design work means nothing if you can't explain the why. Clarity in process is just as important as clarity on screen." },
];

const PrinciplesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 lg:py-48 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-24"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Principles & Values
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What I stand for
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 lg:p-10 group hover:border-accent/30 transition-colors duration-500"
            >
              <span className="font-display text-5xl lg:text-6xl font-extrabold text-border group-hover:text-accent/20 transition-colors duration-500 block mb-4">
                {p.number}
              </span>
              <h4 className="font-display text-xl font-bold text-foreground mb-3">
                {p.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
