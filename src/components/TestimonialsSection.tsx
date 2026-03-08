import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote: "Alex has an extraordinary ability to distill complex brand challenges into elegant, powerful visual solutions. Working with them transformed how our audience perceives us entirely.",
    name: "Sarah Chen",
    title: "CEO, Noir Fashion House",
  },
  {
    quote: "Rare combination of strategic thinking and flawless execution. Alex doesn't just design — they build systems that scale. Our brand has never been more cohesive.",
    name: "Marcus Webb",
    title: "Head of Brand, Luxe Hospitality",
  },
  {
    quote: "The attention to detail is staggering. Every micro-interaction, every typographic choice is deliberate. Working with Alex felt like a masterclass in design craft.",
    name: "Elena Torres",
    title: "Creative Director, Editorial Quarterly",
  },
];

const marqueeText = "What people say about me";
const marqueeContent = Array(8).fill(marqueeText).join("  ·  ") + "  ·  ";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 lg:py-48">
      <div ref={ref}>
        {/* Marquee */}
        <div className="overflow-hidden mb-16 lg:mb-24 border-y border-border py-4">
          <div className="animate-marquee whitespace-nowrap flex">
            <span className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground">
              {marqueeContent}
            </span>
            <span className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground">
              {marqueeContent}
            </span>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="font-display text-7xl lg:text-9xl text-accent/30 leading-none block mb-8">
              "
            </span>
            <p className="font-body text-lg lg:text-xl leading-relaxed text-foreground mb-10">
              {testimonials[active].quote}
            </p>
            <p className="font-display text-base font-bold text-foreground">
              {testimonials[active].name}
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              {testimonials[active].title}
            </p>

            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-accent scale-125" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
