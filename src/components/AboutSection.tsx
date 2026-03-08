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
              Hi, I'm Akhil
            </h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground mt-2">
              I build solutions for
            </h3>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-accent mt-2">
              real-world problems
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pt-8"
          >
            <p className="font-body text-base lg:text-lg leading-relaxed text-muted-foreground mb-6">
              Dedicated and driven software developer with expertise in C Programming, Python, Java, 
              and web technologies. I love turning complex problems into clean, user-friendly solutions
              that exceed expectations.
            </p>
            <p className="font-body text-base lg:text-lg leading-relaxed text-muted-foreground mb-10">
              Currently pursuing B.Tech at GITAM, Bengaluru with hands-on experience in web development, 
              data analytics, and AI-powered applications.
            </p>

            {/* Education */}
            <div className="border-t border-border pt-8 space-y-6">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Education</p>
              {[
                { school: "GITAM, Bengaluru", degree: "B.Tech", year: "2023 – Present", score: "CGPA: 7.23" },
                { school: "Sri Chaitanya, Tirupathi", degree: "Intermediate", year: "2021 – 2023", score: "CGPA: 7.45" },
                { school: "DAV Bharathi, Kamalapuram", degree: "Class 10", year: "2020 – 2021", score: "CGPA: 10/10" },
              ].map((edu) => (
                <div key={edu.school} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-body text-sm text-foreground font-medium">{edu.school}</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{edu.degree}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-body text-xs text-muted-foreground">{edu.year}</p>
                    <p className="font-body text-xs text-accent mt-0.5">{edu.score}</p>
                  </div>
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
