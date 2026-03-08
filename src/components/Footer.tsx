const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg tracking-wider text-foreground">
          STUDIO
        </span>
        <div className="flex gap-8">
          {["Twitter", "Dribbble", "LinkedIn", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider uppercase"
            >
              {social}
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
