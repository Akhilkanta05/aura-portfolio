const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-foreground">
          Venkatesh Akhil Kanta
        </span>
        <div className="flex gap-8">
          {["LinkedIn", "GitHub", "Portfolio"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-[0.1em] uppercase"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
