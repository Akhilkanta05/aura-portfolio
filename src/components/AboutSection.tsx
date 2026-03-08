import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-48">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-8">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground">
              Design is the silent ambassador of{" "}
              <span className="italic text-primary">your brand</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="font-body text-base lg:text-lg leading-relaxed text-muted-foreground mb-8">
              With over a decade of experience in brand identity, digital design, and creative direction,
              I help ambitious brands translate their vision into compelling visual narratives that resonate
              with their audience and stand the test of time.
            </p>
            <p className="font-body text-base lg:text-lg leading-relaxed text-muted-foreground mb-12">
              Every project begins with deep understanding — of your brand, your market, and your aspirations.
              From there, we craft experiences that are not just beautiful, but strategically purposeful.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { number: "12+", label: "Years" },
                { number: "80+", label: "Projects" },
                { number: "30+", label: "Awards" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl lg:text-4xl text-foreground mb-1">
                    {stat.number}
                  </p>
                  <p className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
