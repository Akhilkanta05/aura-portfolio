import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

const marqueeText = "Alex Morgan  ·  Alex Morgan  ·  Alex Morgan  ·  Alex Morgan  ·  Alex Morgan  ·  Alex Morgan  ·  ";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Portrait background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-0"
      >
        <img
          src={portrait}
          alt="Alex Morgan portrait"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      {/* Marquee text overlay */}
      <div className="absolute bottom-[30%] left-0 w-full overflow-hidden pointer-events-none">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="font-display text-[8vw] md:text-[7vw] font-extrabold uppercase text-foreground/90 tracking-tight">
            {marqueeText}
          </span>
          <span className="font-display text-[8vw] md:text-[7vw] font-extrabold uppercase text-foreground/90 tracking-tight">
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Bottom info */}
      <div className="relative container mx-auto px-6 lg:px-12 pb-10 flex items-end justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-body text-xs tracking-[0.2em] uppercase text-foreground/60"
        >
          Based in New York, USA
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-right"
        >
          <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground/60">
            Creative Director
          </p>
          <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground/60 mt-1">
            Brand & Digital Design
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
