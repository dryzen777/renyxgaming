import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#social", label: "Social" },
  { href: "#contenuti", label: "Contenuti" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#home" className="font-display text-xl font-bold tracking-[0.2em] text-gradient">RENYX88</a>
        <ul className="hidden gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary-glow">{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="relative flex size-11 items-center justify-center md:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`absolute h-0.5 w-6 bg-foreground transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-2"}`} />
          <span className={`absolute h-0.5 w-6 bg-primary transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-6 bg-foreground transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-2"}`} />
        </button>
      </nav>
      <div className={`overflow-hidden transition-[max-height] duration-500 md:hidden ${open ? "max-h-80" : "max-h-0"}`}>
        <ul className="flex flex-col px-5 pb-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block border-b py-4 font-display text-lg tracking-[0.2em]">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
