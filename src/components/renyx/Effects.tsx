import { useEffect, useMemo, useRef, useState } from "react";

function seeded(i: number) {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function Petals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: seeded(i) * 100,
        size: 8 + seeded(i + 50) * 12,
        dur: 10 + seeded(i + 100) * 12,
        delay: -seeded(i + 150) * 20,
        drift: (seeded(i + 200) - 0.5) * 240,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="animate-petal absolute top-0 block rounded-[100%_0_100%_0] bg-gradient-pink opacity-80"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.75,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

export function Particles({ count = 24 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: seeded(i + 7) * 100,
        top: 30 + seeded(i + 17) * 70,
        dur: 4 + seeded(i + 27) * 6,
        delay: -seeded(i + 37) * 8,
        size: 2 + seeded(i + 47) * 3,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="animate-float-up absolute rounded-full bg-primary-glow shadow-glow"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size, animationDuration: `${d.dur}s`, animationDelay: `${d.delay}s` }}
        />
      ))}
    </div>
  );
}

export function useParallax(speed = 0.2) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(window.scrollY * speed));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);
  return offset;
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Loader() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1100);
    const t2 = setTimeout(() => setGone(true), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (gone) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${hide ? "pointer-events-none opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      <p className="font-display text-3xl font-bold tracking-[0.3em] text-gradient text-glow">RENYX88</p>
      <div className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-muted">
        <div className="animate-load-bar h-full w-1/3 bg-gradient-pink" />
      </div>
    </div>
  );
}
