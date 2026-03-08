import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Cinematic architectural space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
          >
            Creative Director & Designer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight text-foreground"
          >
            Crafting
            <br />
            <span className="italic text-primary">Visual</span>
            <br />
            Experiences
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-6 lg:right-12 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground rotate-90 origin-center mb-8">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-primary/50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
